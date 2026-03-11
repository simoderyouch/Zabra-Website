'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTranslation } from '@/context/LanguageContext';

export default function Navbar() {
    const { totalItems } = useCart();
    const { t, locale, setLocale } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <nav className="w-full relative top-0 left-0 right-0  bg-gradient-to-r from-zabra-nav-from via-zabra-nav-via to-zabra-nav-from border-b border-[rgba(212,175,55,1)]/[0-9]* rounded-b-2xl  transition-all duration-300">
            <div className="container mx-auto px-6 py-5 lg:px-12 lg:py-6 flex items-center justify-between max-w-[1400px]">

                {/* Logo & Slogan */}
                <div className="flex items-center gap-4 lg:gap-6">
                    <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
                        <Image src="/logo.svg" alt="Zabra Logo" width={250} height={80} className="w-auto h-12 sm:h-16 lg:h-20" priority />
                    </Link>
                    <div className="hidden sm:flex flex-col justify-center text-[13px] sm:text-[10px] lg:text-[13px] font-semibold text-white tracking-[0.2em] uppercase leading-tight border-l border-gray-600 pl-4 lg:pl-6 py-1">
                        <span>{t('nav.sloganLine1')}</span>
                        <span>{t('nav.sloganLine2')}</span>
                        <span className="text-[rgba(212,175,55,0.9)] font-bold mt-0.5">{t('nav.sloganLine3')}</span>
                    </div>
                </div>

                {/* Navigation Wrapper */}
                <div className="hidden md:flex flex-row items-center gap-6 lg:gap-8 text-[13px] lg:text-[14px] font-bold text-white uppercase tracking-widest relative z-[60]">
                    <Link href="/" className="hover:text-[rgba(212,175,55,0.9)] transition-colors duration-300 relative group">
                        <span>{t('nav.home')}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/about-us" className="hover:text-[rgba(212,175,55,0.9)] transition-colors duration-300 relative group">
                        <span>{t('nav.aboutUs')}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact-us" className="hover:text-[rgba(212,175,55,0.9)] transition-colors duration-300 relative group">
                        <span>{t('nav.contactUs')}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Vertical Divider */}
                    <div className="h-5 w-px bg-gray-500/50 mx-1 lg:mx-2"></div>

                    {/* Cart Icon */}
                    <Link href="/cart" className="relative hover:text-[rgba(212,175,55,0.9)] transition-colors duration-300 group">
                        <ShoppingCart className="w-5 h-5" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2.5 w-4.5 h-4.5 bg-[rgba(212,175,55,0.9)] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Language Selector Dropdown */}
                    <div className="relative" ref={langRef}>
                        <button
                            type="button"
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1.5 cursor-pointer hover:bg-white/10 transition-colors group px-3 py-1.5 rounded-full border border-transparent hover:border-white/20"
                        >
                            <span className="transition-colors group-hover:text-[rgba(212,175,55,0.9)]">{locale.toUpperCase()}</span>
                            <svg className={`w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300 ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {/* Dropdown */}
                        {langOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[100px] animate-fade-in z-50">
                                {([
                                    { code: 'en' as const, flag: '🇬🇧', label: 'EN' },
                                    { code: 'fr' as const, flag: '🇫🇷', label: 'FR' },
                                    { code: 'ar' as const, flag: '🇲🇦', label: 'AR' },
                                ]).map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                                        className={`w-full px-4 py-2.5 text-left text-sm font-bold tracking-wider transition-colors flex items-center gap-2 ${locale === lang.code ? 'bg-[rgba(212,175,55,0.1)] text-[rgba(170,140,40,1)]' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        <span className="text-base">{lang.flag}</span> {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button  */}
                <div className="md:hidden flex items-center z-80 gap-3">
                    {/* Mobile Language Toggle */}
                    <button
                        onClick={() => {
                            const order: Array<'en' | 'fr' | 'ar'> = ['en', 'fr', 'ar'];
                            const next = order[(order.indexOf(locale as any) + 1) % order.length];
                            setLocale(next);
                        }}
                        className="px-2.5 py-1 text-xs font-bold text-white uppercase tracking-wider rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        {locale === 'en' ? 'FR' : locale === 'fr' ? 'AR' : 'EN'}
                    </button>
                    <Link href="/cart" className="relative p-2">
                        <ShoppingCart className="w-5 h-5 text-white" />
                        {totalItems > 0 && (
                            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[rgba(212,175,55,0.9)] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <button className="flex flex-col gap-[5px] p-3 group rounded-full hover:bg-white/10 transition-colors" aria-label="Menu">
                        <div className="w-6 h-[2px] bg-white transition-all group-hover:w-full rounded-full"></div>
                        <div className="w-4 h-[2px] bg-white transition-all group-hover:w-full rounded-full self-end"></div>
                        <div className="w-6 h-[2px] bg-white transition-all group-hover:w-full rounded-full"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
