Enterimport { useLanguage } from '../context/LanguageContext';

export default function ChatbotButton() {
  const { t } = useLanguage();
  return (
    <button
      onClick={() => alert(t('welcome'))}
      className="fixed bottom-8 end-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform z-50"
    >
      💬
    </button>
  );
}
