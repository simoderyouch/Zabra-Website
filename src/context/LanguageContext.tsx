'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../../messages/en.json';
import fr from '../../messages/fr.json';
import ar from '../../messages/ar.json';

type Locale = 'en' | 'fr' | 'ar';

const messages: Record<Locale, Record<string, any>> = { en, fr, ar };

const RTL_LOCALES: Locale[] = ['ar'];

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNestedValue(obj: Record<string, any>, path: string): string {
    const keys = path.split('.');
    let current: any = obj;
    for (const key of keys) {
        if (current === undefined || current === null) return path;
        current = current[key];
    }
    return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');
    const [mounted, setMounted] = useState(false);

    // Read from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('zabra-lang') as Locale | null;
        if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
            setLocaleState(saved);
        }
        setMounted(true);
    }, []);

    // Update localStorage, html lang & dir attributes on change
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('zabra-lang', locale);
            document.documentElement.lang = locale;
            document.documentElement.dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
        }
    }, [locale, mounted]);

    const isRTL = RTL_LOCALES.includes(locale);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
    };

    const t = (key: string): string => {
        return getNestedValue(messages[locale], key);
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
