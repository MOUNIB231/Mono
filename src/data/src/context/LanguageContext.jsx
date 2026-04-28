hereimport { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [isArabic, setIsArabic] = useState(true);

  const toggleLanguage = useCallback(() => {
    setIsArabic(prev => !prev);
  }, []);

  const t = (key) => {
    const translations = {
      home: isArabic ? 'الرئيسية' : 'Home',
      tools: isArabic ? 'الأدوات' : 'Tools',
      pricing: isArabic ? 'الأسعار' : 'Pricing',
      blog: isArabic ? 'المدونة' : 'Blog',
      contact: isArabic ? 'اتصل بنا' : 'Contact',
      login: isArabic ? 'تسجيل الدخول' : 'Login',
      logout: isArabic ? 'تسجيل الخروج' : 'Logout',
      dashboard: isArabic ? 'لوحة التحكم' : 'Dashboard',
      search: isArabic ? 'ابحث عن أداة...' : 'Search tools...',
      all: isArabic ? 'كل الفئات' : 'All',
      writing: isArabic ? 'كتابة' : 'Writing',
      productivity: isArabic ? 'إنتاجية' : 'Productivity',
      dev: isArabic ? 'تطوير' : 'Development',
      useNow: isArabic ? 'استخدم الآن' : 'Use Now',
      startNow: isArabic ? 'ابدأ الآن' : 'Start Now',
      exploreTools: isArabic ? 'استكشف الأدوات' : 'Explore Tools',
      freePlan: isArabic ? 'مجاني' : 'Free',
      proPlan: isArabic ? 'برو' : 'Pro',
      lifetime: isArabic ? 'مدى الحياة' : 'Lifetime',
      heroTitle: isArabic
        ? 'أفضل أدوات الذكاء الاصطناعي بالعربية'
        : 'The Best AI Tools for Arabic Users',
      heroDesc: isArabic
        ? 'منصة متكاملة تجمع أقوى أدوات الذكاء الاصطناعي مصممة خصيصاً للمستخدم العربي.'
        : 'An integrated platform gathering the most powerful AI tools designed for Arabic users.',
      welcome: isArabic ? 'أهلاً بك في MonoAIHub' : 'Welcome to MonoAIHub',
    };
    return translations[key] || key;
  };

  const dir = isArabic ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
