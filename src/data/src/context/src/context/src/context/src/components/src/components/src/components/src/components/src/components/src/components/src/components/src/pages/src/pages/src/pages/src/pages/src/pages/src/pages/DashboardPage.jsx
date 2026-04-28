Enterimport { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold glow-text">{t('dashboard')}</h1>
          <button onClick={logout} className="text-sm bg-red-500/20 hover:bg-red-500/40 px-4 py-2 rounded-full">
            {t('logout')}
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-2xl font-bold">12</div>
            <div className="text-gray-400">{t('tools')} {t('useNow')} اليوم</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-2xl font-bold">5</div>
            <div className="text-gray-400">مفضلة</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-2xl font-bold">230</div>
            <div className="text-gray-400">إجمالي الاستخدامات</div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">السجل الحديث</h2>
        <div className="glass-effect p-4 rounded-xl space-y-3">
          <div className="flex justify-between"><span>كاتب نصوص - مقال عن التكنولوجيا</span><span className="text-gray-400">منذ 10 دقائق</span></div>
          <div className="flex justify-between"><span>مصحح قواعد - رسالة رسمية</span><span className="text-gray-400">منذ ساعة</span></div>
        </div>
      </div>
    </section>
  );
}
