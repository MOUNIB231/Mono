Enterimport { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold glow-text mb-8 text-center">{t('contact')}</h1>
        <form className="glass-effect p-8 rounded-2xl space-y-5">
          <input type="text" placeholder={t('home') === 'الرئيسية' ? 'الاسم' : 'Name'} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3" />
          <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3" />
          <textarea rows="5" placeholder={t('home') === 'الرئيسية' ? 'رسالتك' : 'Your message'} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3"></textarea>
          <button className="btn-primary w-full py-3 rounded-full font-bold">{t('home') === 'الرئيسية' ? 'إرسال' : 'Send'}</button>
        </form>
      </div>
    </section>
  );
}
