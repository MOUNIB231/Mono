Enterimport Header from './Header';
import Footer from './Footer';
import ChatbotButton from './ChatbotButton';
import { useLanguage } from '../context/LanguageContext';

export default function Layout({ children }) {
  const { dir } = useLanguage();
  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
