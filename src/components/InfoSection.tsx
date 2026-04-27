import { useTranslations, useMessages } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('knowledge');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-16 mx-auto" style={{ background: 'var(--accent)' }} />

        {/* 核心简介 */}
        <div className="mb-16">
          <div
            className="bg-white/5 p-8 sm:p-10 rounded-2xl border border-white/10 shadow-sm"
          >
            <h3
              className="font-display text-2xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('coreIntro.title')}
            </h3>
            <p
              className="text-lg sm:text-xl leading-relaxed whitespace-pre-wrap"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('coreIntro.content')}
            </p>
          </div>
        </div>

        {/* 基本资讯 */}
        <div className="mb-16">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('basicInfo.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 开放时间 */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {t('basicInfo.hours')}
              </h4>
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {t('basicInfo.hoursContent')}
              </p>
            </div>

            {/* 门票价格 */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                {t('basicInfo.ticket')}
              </h4>
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {t('basicInfo.ticketContent')}
              </p>
            </div>

            {/* 地址 */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t('basicInfo.address')}
              </h4>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('basicInfo.addressContent')}
              </p>
            </div>

            {/* 交通方式 */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                {t('basicInfo.transport')}
              </h4>
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {t('basicInfo.transportContent')}
              </p>
            </div>
          </div>
        </div>

        {/* 历史与文化 */}
        <div className="mb-16">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('history.title')}
          </h3>
          
          {/* 历史地位 */}
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('history.historicalStatus')}
            </h4>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('history.historicalStatusContent')}
            </p>
          </div>

          {/* 文化价值 */}
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('history.culturalValue')}
            </h4>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('history.culturalValueContent')}
            </p>
          </div>

          {/* 历史背景 - 长文单独区块 */}
          <div className="bg-white/5 p-8 sm:p-10 rounded-xl border border-white/10">
            <h4 className="font-display text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('history.historyBackground')}
            </h4>
            <div className="w-8 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
              {t('history.historyBackgroundContent')}
            </p>
          </div>
        </div>

        {/* 建筑特色 */}
        <div className="mb-16">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('architecture.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('architecture.features')}
              </h4>
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {t('architecture.featuresContent')}
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('architecture.style')}
              </h4>
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {t('architecture.styleContent')}
              </p>
            </div>
          </div>
        </div>

        {/* 游览路线 */}
        <div className="mb-16">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('tourRoute.title')}
          </h3>
          
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('tourRoute.overview')}
            </h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
              {t('tourRoute.overviewContent')}
            </p>
          </div>

          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('tourRoute.steps')}
            </h4>
            <div className="space-y-5">
              {t('tourRoute.stepsContent').split('\n').filter(Boolean).map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                    style={{ background: 'var(--accent)' }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-base leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                    {step.trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('tourRoute.tips')}
            </h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
              {t('tourRoute.tipsContent')}
            </p>
          </div>
        </div>

        {/* 拍照指南 */}
        <div className="mb-16">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('photography.title')}
          </h3>
          
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('photography.spots')}
            </h4>
            <div className="space-y-5">
              {t('photography.spotsContent').split('\n').filter(Boolean).map((spot, index) => {
                const [title, ...desc] = spot.split('：');
                return (
                  <div key={index} className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                      style={{ background: 'var(--accent)' }}
                    >
                      {index + 1}
                    </span>
                    <div className="text-base leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</span>
                      {desc.length > 0 && <span>：{desc.join('')}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('photography.tips')}
            </h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
              {t('photography.tipsContent')}
            </p>
          </div>
        </div>

        {/* 住宿建议 */}
        <div className="mb-12">
          <h3
            className="font-display text-2xl font-semibold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('accommodation.title')}
          </h3>
          
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 mb-6">
            <h4 className="font-display text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('accommodation.recommendations')}
            </h4>
            <div className="space-y-5">
              {t('accommodation.recommendationsContent').split('\n').filter(Boolean).map((rec, index) => {
                const [label, ...desc] = rec.split('：');
                return (
                  <div key={index} className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                      style={{ background: 'var(--accent)' }}
                    >
                      {index + 1}
                    </span>
                    <div className="text-base leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{label}</span>
                      {desc.length > 0 && <span>：{desc.join('')}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('accommodation.tips')}
            </h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
              {t('accommodation.tipsContent')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
