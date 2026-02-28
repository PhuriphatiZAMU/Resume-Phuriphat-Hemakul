import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../data/translations';

type LanguageType = 'th' | 'en';

interface LanguageContextType {
    lang: LanguageType;
    toggleLang: () => void;
    t: typeof translations['th'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<LanguageType>('th');

    const toggleLang = () => setLang(lang === 'th' ? 'en' : 'th');
    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
