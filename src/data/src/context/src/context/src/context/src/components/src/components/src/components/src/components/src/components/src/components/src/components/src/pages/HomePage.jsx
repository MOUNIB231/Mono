Enterimport { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <section className="section-padding text-center relative overflow-hidden">
      <div className="absolute top-10 start-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 end-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-10 pt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="glow-text">{t('heroTitle')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">{t('heroDesc')}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/tools" className="btn-primary text-white font-bold px-8 py-4 rounded-full text-lg">
            {t('startNow')}
          </Link>
          <Link to="/tools" className="border border-white/20 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-lg transition">
            {t('exploreTools')}
          </Link>
        </div>
      </div>
    </section>
  );
}
