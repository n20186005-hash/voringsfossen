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
    const shouldRedirect = hostname !== canonicalHost || forwardedProtocol !== 'https' || request.nextUrl.pathname === '/';

    if (shouldRedirect) {
      const destination = request.nextUrl.clone();
      destination.protocol = 'https';
      destination.hostname = canonicalHost;
      destination.port = '';
      if (destination.pathname === '/') destination.pathname = '/en';
      return NextResponse.redirect(destination, 301);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
