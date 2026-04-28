import { useLanguage } from '../context/LanguageContext';

export default function ToolCard({ tool }) {
  const { isArabic, t } = useLanguage();
  return (
    <div className="tool-card glass-effect p-6 rounded-2xl card-glow text-center hover:-translate-y-1 transition-transform duration-300">
      <div className="text-4xl mb-3">{tool.icon}</div>
      <h3 className="text-xl font-bold mb-2">{isArabic ? tool.nameAr : tool.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{tool.desc}</p>
      <button className="btn-primary text-white px-5 py-2 rounded-full text-sm w-full">
        {t('useNow')}
      </button>
    </div>
  );
}
