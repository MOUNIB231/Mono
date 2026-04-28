Enterimport { useLanguage } from '../context/LanguageContext';
import { useTools } from '../context/ToolsContext';
import ToolCard from '../components/ToolCard';

export default function ToolsPage() {
  const { t } = useLanguage();
  const { filteredTools, searchTerm, setSearchTerm, category, setCategory } = useTools();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold glow-text text-center mb-8">{t('tools')}</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input flex-1"
            placeholder={t('search')}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white"
          >
            <option value="all">{t('all')}</option>
            <option value="writing">{t('writing')}</option>
            <option value="productivity">{t('productivity')}</option>
            <option value="dev">{t('dev')}</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
