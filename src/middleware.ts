import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);
const canonicalHost = 'www.voringsfossen.org';

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0].toLowerCase();
  const isProductionHost = hostname === 'voringsfossen.org' || hostname === canonicalHost;

  if (isProductionHost) {
    const forwardedProtocol = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol.replace(':', '');
    const shouldRedirect = hostname !== canonicalHost || forwardedProtocol !== 'https';

    if (shouldRedirect) {
      const destination = request.nextUrl.clone();
      destination.protocol = 'https';
      destination.hostname = canonicalHost;
      destination.port = '';
      return NextResponse.redirect(destination, 301);
    }
  }

  // The bare domain has its own English route. It must not be redirected
  // by next-intl's locale-prefix middleware.
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
