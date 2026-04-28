Enterimport { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

export default function Header() {
  const { t, toggleLanguage, isArabic } = useLanguage();
  const { isLoggedIn, logout } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isLoggedIn) navigate('/dashboard');
    else setModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-40 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
        <Link to="/" className="text-3xl font-bold glow-text">MonoAIHub</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-400 transition">{t('home')}</Link>
          <Link to="/tools" className="hover:text-blue-400 transition">{t('tools')}</Link>
          <Link to="/pricing" className="hover:text-blue-400 transition">{t('pricing')}</Link>
          <Link to="/blog" className="hover:text-blue-400 transition">{t('blog')}</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLanguage} className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition">
            {isArabic ? 'English' : 'العربية'}
          </button>
          <button onClick={handleLoginClick} className="btn-primary text-white font-semibold px-5 py-2 rounded-full text-sm">
            {isLoggedIn ? t('dashboard') : t('login')}
          </button>
          <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/90 px-5 pb-4 space-y-3">
          <Link to="/" className="block py-2" onClick={() => setMobileOpen(false)}>{t('home')}</Link>
          <Link to="/tools" className="block py-2" onClick={() => setMobileOpen(false)}>{t('tools')}</Link>
          <Link to="/pricing" className="block py-2" onClick={() => setMobileOpen(false)}>{t('pricing')}</Link>
          <Link to="/blog" className="block py-2" onClick={() => setMobileOpen(false)}>{t('blog')}</Link>
          <Link to="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>{t('contact')}</Link>
        </div>
      )}

      {modalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
    </header>
  );
}
