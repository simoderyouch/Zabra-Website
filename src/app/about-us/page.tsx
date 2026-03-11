'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, TreePalm, ChevronRight, MapPin, Heart, Award, ArrowDown } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function AboutPage() {
    const { t } = useTranslation();

    const terroirs = [
        {
            title: t('about.terroir1Title'),
            subtitle: t('about.terroir1Subtitle'),
            image: '/images/olive-terroir.png',
            description: t('about.terroir1Desc'),
            product: t('about.terroir1Product'),
            cta: t('about.terroir1Cta'),
            icon: <Leaf className="w-5 h-5" />,
            href: '/products/olive-oil',
        },
        {
            title: t('about.terroir2Title'),
            subtitle: t('about.terroir2Subtitle'),
            image: '/images/argan-terroir.png',
            description: t('about.terroir2Desc'),
            product: t('about.terroir2Product'),
            cta: t('about.terroir2Cta'),
            icon: <Droplets className="w-5 h-5" />,
            href: '/products/argan-oil',
        },
        {
            title: t('about.terroir3Title'),
            subtitle: t('about.terroir3Subtitle'),
            image: '/images/dates-terroir.png',
            description: t('about.terroir3Desc'),
            product: t('about.terroir3Product'),
            cta: t('about.terroir3Cta'),
            icon: <TreePalm className="w-5 h-5" />,
            href: '/products/dates',
        },
    ];

    const values = [
        {
            icon: <MapPin className="w-7 h-7" />,
            title: t('about.value1Title'),
            description: t('about.value1Desc'),
        },
        {
            icon: <Heart className="w-7 h-7" />,
            title: t('about.value2Title'),
            description: t('about.value2Desc'),
        },
        {
            icon: <Award className="w-7 h-7" />,
            title: t('about.value3Title'),
            description: t('about.value3Desc'),
        },
    ];

    return (
        <main className="bg-[#FDFBF7] min-h-screen">

            {/* ══════════════════════════ HERO ══════════════════════════ */}
            <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
                {/* Full-bleed hero image */}
                <Image
                    src="/images/pexels-pavel-danilyuk-7405761.jpg"
                    alt="Moroccan olive terroir"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] pb-16 lg:pb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-[rgba(212,175,55,1)] uppercase tracking-widest mb-6">
                        <Leaf className="w-3.5 h-3.5" />
                        {t('about.badge')}
                    </div>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight mb-6 leading-[1.05]">
                        {t('about.heroLine1')}<br />
                        <span className="bg-gradient-to-r from-[rgba(212,175,55,1)] to-[rgba(240,210,80,1)] bg-clip-text text-transparent">{t('about.heroLine2')}</span>
                    </h1>
                    <p className="text-white/70 font-sans leading-relaxed text-lg lg:text-xl max-w-2xl">
                        {t('about.heroDesc')}
                    </p>
                    <div className="mt-10 flex items-center gap-2 text-white/90 text-xs uppercase tracking-widest animate-bounce">
                        <ArrowDown className="w-4 h-4" />
                        {t('about.scrollToExplore')}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ INTRO TEXT ══════════════════════════ */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.9)] to-transparent rounded-full mx-auto mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-8 leading-snug">
                            {t('about.introTitle')}
                        </h2>
                        <p className="text-gray-500 font-sans leading-relaxed text-lg lg:text-xl">
                            {t('about.introDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ TERROIR CARDS (ALTERNATING) ══════════════════════════ */}
            <section className="pb-16 lg:pb-28">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="space-y-16 lg:space-y-24">
                        {terroirs.map((terroir, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src={terroir.image}
                                            alt={terroir.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    {/* Decorative number */}
                                    <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-14 h-14 lg:w-18 lg:h-18 rounded-2xl bg-[#1A1A1A] flex items-center justify-center shadow-xl z-10">
                                        <span className="text-2xl lg:text-3xl font-serif font-bold text-white">0{i + 1}</span>
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[rgba(170,140,40,1)]">
                                            {terroir.icon}
                                        </div>
                                        <span className="text-[10px] font-bold text-[rgba(160,130,30,1)] uppercase tracking-[0.2em]">{terroir.subtitle}</span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-4">{terroir.title}</h3>
                                    <div className="h-1 w-12 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-transparent rounded-full mb-6" />
                                    <p className="text-gray-500 font-sans leading-relaxed text-base lg:text-lg mb-8">{terroir.description}</p>
                                    <Link href={terroir.href} className="inline-flex items-center gap-2 text-[rgba(170,140,40,1)] text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group">
                                        {terroir.cta}
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ VALUES ══════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #FFF 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold text-[rgba(212,175,55,0.7)] uppercase tracking-[0.3em] mb-4 block">{t('about.valuesTitle')}</span>
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
                            {t('about.valuesHeadline')}
                        </h2>
                        <div className="flex justify-center my-6">
                            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.7)] to-transparent rounded-full" />
                        </div>
                        <p className="text-gray-400 font-sans max-w-xl mx-auto text-lg">
                            {t('about.valuesDesc')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {values.map((value, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[rgba(212,175,55,0.8)] mx-auto mb-6 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.3)] transition-all duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="font-serif font-bold text-white text-xl mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm font-sans leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ CTA ══════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <Image
                    src="/images/dates-terroir.png"
                    alt="Moroccan landscape"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm" />
                <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">{t('about.ctaTitle')}</h2>
                    <p className="text-gray-300 font-sans max-w-xl mx-auto mb-10 text-lg">
                        {t('about.ctaSubtitle')}
                    </p>
                    <Link
                        href="/products/olive-oil"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[rgba(212,175,55,1)] to-[rgba(180,150,40,1)] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest rounded-full hover:shadow-xl hover:shadow-[rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.03]"
                    >
                        {t('about.ctaButton')}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
