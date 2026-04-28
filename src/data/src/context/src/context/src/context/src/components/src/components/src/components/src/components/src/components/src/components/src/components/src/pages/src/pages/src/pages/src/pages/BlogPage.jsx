Enterimport { useLanguage } from '../context/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold glow-text mb-10">{t('blog')}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="glass-effect p-6 rounded-2xl card-glow">
            <h2 className="text-2xl font-bold mb-2">كيف يساعدك الذكاء الاصطناعي في كتابة المحتوى العربي؟</h2>
            <p className="text-gray-400 text-sm mb-4">أصبحت أدوات الكتابة بالذكاء الاصطناعي قادرة على فهم الفروق الدقيقة للغة العربية...</p>
            <a href="#" className="text-blue-400 hover:underline">اقرأ المزيد</a>
          </article>
          <article className="glass-effect p-6 rounded-2xl card-glow">
            <h2 className="text-2xl font-bold mb-2">5 أدوات لا غنى عنها لكل رائد أعمال عربي</h2>
            <p className="text-gray-400 text-sm mb-4">من توليد أسماء المشاريع إلى تصحيح السير الذاتية...</p>
            <a href="#" className="text-blue-400 hover:underline">اقرأ المزيد</a>
          </article>
        </div>
      </div>
    </section>
  );
}
