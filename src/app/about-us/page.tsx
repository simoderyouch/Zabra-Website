'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, TreePalm, ChevronRight, MapPin, Heart, Award, ArrowDown } from 'lucide-react';

const terroirs = [
    {
        title: 'Beni Mellal',
        subtitle: 'The Olive Orchards',
        image: '/images/olive-terroir.png',
        description: 'Our extra virgin olive oil comes from the fertile orchards of Beni Mellal, a region long celebrated for the richness of its olive groves. Grown under the sun of the Atlas foothills and nurtured by generations of farmers , this oil expresses the pure character of Moroccan olive terroir.',
        product: 'Extra Virgin Olive Oil',
        icon: <Leaf className="w-5 h-5" />,
        href: '/products/olive-oil',
    },
    {
        title: 'Essaouira',
        subtitle: 'The Argan Forests',
        image: '/images/argan-terroir.png',
        description: 'The "Gold of Morocco" — our argan oil is extracted from ancestral argan trees in a UNESCO-protected biosphere reserve. Available in both cosmetic and culinary forms for skin, hair, and kitchen.',
        product: 'Pure Argan Oil',
        icon: <Droplets className="w-5 h-5" />,
        href: '/products/argan-oil',
    },
    {
        title: 'Errachidia',
        subtitle: 'The Date Palm Groves',
        image: '/images/dates-terroir.png',
        description: 'Naturally caramelized Medjool dates, hand-selected from the ancestral palm groves of the Ziz Valley. Each date is individually inspected for generous size, intact skin, and naturally soft flesh.',
        product: 'Medjool Dates',
        icon: <TreePalm className="w-5 h-5" />,
        href: '/products/dates',
    },
];

const values = [
    {
        icon: <MapPin className="w-7 h-7" />,
        title: 'Terroir Authenticity',
        description: 'Every product is sourced directly from its region of origin, preserving the authentic identity and climate of its home.',
    },
    {
        icon: <Heart className="w-7 h-7" />,
        title: 'Artisanal Craft',
        description: 'We don\'t mass-produce — we select. Each extraction is personally supervised and each product hand-inspected.',
    },
    {
        icon: <Award className="w-7 h-7" />,
        title: 'Uncompromised Quality',
        description: 'From second-season harvests to cold-pressed extraction, every step is designed to deliver excellence.',
    },
];

export default function AboutPage() {
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
                        Our Story
                    </div>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight mb-6 leading-[1.05]">
                        Three Terroirs,<br />
                        <span className="bg-gradient-to-r from-[rgba(212,175,55,1)] to-[rgba(240,210,80,1)] bg-clip-text text-transparent">One Soul.</span>
                    </h1>
                    <p className="text-white/70 font-sans leading-relaxed text-lg lg:text-xl max-w-2xl">
                        ZABRA is a Moroccan brand rooted in the three richest landscapes of the Kingdom — a bridge between ancestral traditions and your modern lifestyle.
                    </p>
                    <div className="mt-10 flex items-center gap-2 text-white/90 text-xs uppercase tracking-widest animate-bounce">
                        <ArrowDown className="w-4 h-4" />
                        Scroll to explore
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ INTRO TEXT ══════════════════════════ */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.9)] to-transparent rounded-full mx-auto mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-8 leading-snug">
                            A legacy woven from three of Morocco&apos;s most extraordinary landscapes
                        </h2>
                        <p className="text-gray-500 font-sans leading-relaxed text-lg lg:text-xl">
                            Our identity is shaped by a unique family heritage: inspired by the ancestral palm groves of <strong className="text-[#1A1A1A]">Errachidia</strong>, the golden argan forests of the <strong className="text-[#1A1A1A]">Souss</strong>, and the fertile olive orchards of <strong className="text-[#1A1A1A]">Beni Mellal</strong>. This deep connection to the land ensures that every product we offer carries the authentic soul of its terroir.
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
                                        Discover {terroir.product}
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
                        <span className="text-[10px] font-bold text-[rgba(212,175,55,0.7)] uppercase tracking-[0.3em] mb-4 block">Our Principles</span>
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
                            Authenticity. Trust. Excellence.
                        </h2>
                        <div className="flex justify-center my-6">
                            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.7)] to-transparent rounded-full" />
                        </div>
                        <p className="text-gray-400 font-sans max-w-xl mx-auto text-lg">
                            Every ZABRA product is a bridge between Moroccan traditions and your modern lifestyle.
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

            {/* ══════════════════════════ COLLECTION ══════════════════════════ 
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="text-center mb-14">
                        <span className="text-[10px] font-bold text-[rgba(160,130,30,1)] uppercase tracking-[0.3em] mb-4 block">Selected with Excellence</span>
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-4">Our Collection</h2>
                        <div className="flex justify-center my-6">
                            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.9)] to-transparent rounded-full" />
                        </div>
                        <p className="text-gray-500 font-sans max-w-2xl mx-auto text-lg">
                            Three noble products of the Moroccan terroir, each representing a lifetime of local know-how.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {[
                            { name: 'Extra Virgin Olive Oil', desc: 'Cold-pressed in Beni Mellal for a balanced, gourmet flavor.', href: '/products/olive-oil', icon: <Leaf className="w-7 h-7" />, image: '/images/oil_product.png' },
                            { name: 'Pure Argan Oil', desc: 'The "Gold of Morocco" from Essaouira, in cosmetic and culinary forms.', href: '/products/argan-oil', icon: <Droplets className="w-7 h-7" />, image: '/images/argan_product.png' },
                            { name: 'Medjool Dates', desc: 'Naturally caramelized and hand-selected from the Ziz Valley.', href: '/products/dates', icon: <TreePalm className="w-7 h-7" />, image: '/images/date_product.png' },
                        ].map((product, i) => (
                            <Link key={i} href={product.href} className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[rgba(212,175,55,0.3)] hover:shadow-2xl hover:shadow-[rgba(212,175,55,0.08)] transition-all duration-500">
                                <div className="relative h-52 bg-gradient-to-br from-[#FDFBF7] to-[#F5F0E8] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-[rgba(170,140,40,1)] mx-auto mb-4 group-hover:bg-[rgba(212,175,55,0.15)] transition-colors duration-300">
                                        {product.icon}
                                    </div>
                                    <h3 className="font-serif font-bold text-[#1A1A1A] text-lg mb-2">{product.name}</h3>
                                    <p className="text-gray-500 text-sm font-sans leading-relaxed mb-4">{product.desc}</p>
                                    <span className="inline-flex items-center gap-1.5 text-[rgba(170,140,40,1)] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                                        Shop Now <ChevronRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            */}
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
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">Crafted in Morocco</h2>
                    <p className="text-gray-300 font-sans max-w-xl mx-auto mb-10 text-lg">
                        Designed to travel the world.
                    </p>
                    <Link
                        href="/products/olive-oil"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[rgba(212,175,55,1)] to-[rgba(180,150,40,1)] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest rounded-full hover:shadow-xl hover:shadow-[rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.03]"
                    >
                        Discover Our Products
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
