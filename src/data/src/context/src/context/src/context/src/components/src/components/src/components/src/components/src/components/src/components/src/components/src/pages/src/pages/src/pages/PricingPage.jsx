Enterimport { useLanguage } from '../context/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  return (
    <section className="section-padding text-center">
      <h1 className="text-4xl font-bold glow-text mb-4">{t('pricing')}</h1>
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">{t('heroDesc')}</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="glass-effect p-8 rounded-2xl card-glow">
          <h3 className="text-2xl font-bold">{t('freePlan')}</h3>
          <div className="text-4xl font-extrabold my-4">$0</div>
          <ul className="text-gray-400 text-sm space-y-2 mb-6">
            <li>5 {t('useNow')} / {t('home')}</li>
            <li>{t('tools')} أساسية</li>
            <li>دعم المجتمع</li>
          </ul>
          <button className="btn-primary w-full py-3 rounded-full">{t('startNow')}</button>
        </div>
        <div className="glass-effect p-8 rounded-2xl card-glow border-blue-500/50">
          <h3 className="text-2xl font-bold">{t('proPlan')}</h3>
          <div className="text-4xl font-extrabold my-4">$9.99<span className="text-lg text-gray-400">/{t('pricing') === 'Pricing' ? 'mo' : 'شهر'}</span></div>
          <ul className="text-gray-400 text-sm space-y-2 mb-6">
            <li>غير محدود</li>
            <li>كل الأدوات المتقدمة</li>
            <li>سجل وتفضيلات</li>
          </ul>
          <button className="btn-primary w-full py-3 rounded-full">{t('login')}</button>
        </div>
        <div className="glass-effect p-8 rounded-2xl card-glow">
          <h3 className="text-2xl font-bold">{t('lifetime')}</h3>
          <div className="text-4xl font-extrabold my-4">$199</div>
          <ul className="text-gray-400 text-sm space-y-2 mb-6">
            <li>دفعة واحدة</li>
            <li>وصول دائم</li>
            <li>كل الميزات المستقبلية</li>
          </ul>
          <button className="btn-primary w-full py-3 rounded-full">{t('startNow')}</button>
        </div>
      </div>
    </section>
  );
}
