import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-2xl font-bold glow-text mb-3">MonoAIHub</div>
          <p className="text-gray-400">{t('heroDesc')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t('tools')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/tools" className="hover:text-white">{t('tools')}</Link></li>
            <li><Link to="/pricing" className="hover:text-white">{t('pricing')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t('contact')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/contact" className="hover:text-white">{t('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t('blog')}</h4>
          <div className="flex gap-3 text-xl">🐦 📘 📸</div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-xs">
        © 2025 MonoAIHub. {t('home') === 'الرئيسية' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
      </div>
    </footer>
  );
}
