'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import StoreProductCard from '@/components/StoreProductCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import oliveOil from '@/data/olive-oil.json';
import arganOil from '@/data/argan-oil.json';
import dates from '@/data/dates.json';
import {
    Droplets,
    Leaf,
    Package,
    Thermometer,
    Layers,
    ShieldCheck,
    ChevronRight,
} from 'lucide-react';

// Define the type corresponding to the JSON structure
type CategoryDataRecordType = Record<string, {
    title: string;
    image: string;
    sideNav: Array<{ id: string; label: string }>;
    categoryLabel: string;
    extraction: string;
    texture: string;
    formats: string;
    acidityLevel: string;
    conditionement: string;
    conservation: string;
    variants: Array<{ volume: string; price: string }>;
    specialVariants: Array<{ title: string; volume: string; price: string; category: string }>;
    pages: Record<string, { title: string; content: string }>;
}>;

const typedCategoryData: CategoryDataRecordType = {
    'olive-oil': oliveOil,
    'argan-oil': arganOil,
    'dates': dates,
} as unknown as CategoryDataRecordType;

const SPEC_ICONS: Record<string, React.ReactNode> = {
    category: <Layers className="w-4 h-4" />,
    extraction: <Droplets className="w-4 h-4" />,
    texture: <Leaf className="w-4 h-4" />,
    formats: <Package className="w-4 h-4" />,
    acidityLevel: <Thermometer className="w-4 h-4" />,
    conditionement: <Package className="w-4 h-4" />,
    conservation: <ShieldCheck className="w-4 h-4" />,
};

import { use } from 'react';

export default function ProductsPage(props: { params: Promise<{ category: string }> }) {
    const params = use(props.params);
    const data = typedCategoryData[params.category];
    const [activeTab, setActiveTab] = useState('order');
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);

    // If the category from URL doesn't exist in our JSON data, trigger Next.js 404 page
    if (!data) {
        notFound();
    }

    const specs = [
        { key: 'category', label: 'Category', value: data.categoryLabel },
        { key: 'extraction', label: 'Extraction', value: data.extraction },
        { key: 'texture', label: 'Texture', value: data.texture },
        { key: 'formats', label: 'Formats', value: data.formats },
        // { key: 'acidityLevel', label: 'Acidity Level', value: data.acidityLevel },
        { key: 'conditionement', label: 'Packaging', value: data.conditionement },
        { key: 'conservation', label: 'Conservation', value: data.conservation },
    ];

    return (
        <main className="bg-zabra-cream relative flex flex-col h-[calc(100vh-130px)] overflow-hidden pt-[88px]">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--zabra-dark) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 h-screen flex flex-col flex-1 min-h-0 pb-6">

                {/* Two-column layout: Sticky Nav Left + Content Right */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1 max-h-screen min-h-0">

                    {/* LEFT — Sticky Vertical Nav */}
                    <div className="lg:w-44 flex-shrink-0 h-full flex flex-col">
                        <div className="sticky top-28 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 h-full">
                            {data.sideNav.map((navItem) => (
                                <Button
                                    key={navItem.id}
                                    variant={activeTab === navItem.id ? 'default' : 'ghost'}
                                    onClick={() => setActiveTab(navItem.id)}
                                    className={`
                                        justify-start whitespace-nowrap lg:w-full px-4 py-2.5 h-auto text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl
                                        ${activeTab === navItem.id
                                            ? 'bg-zabra-dark text-white shadow-lg shadow-black/10 hover:bg-[#333]'
                                            : 'text-gray-400 hover:text-gray-800 hover:bg-gray-100/60'
                                        }
                                    `}
                                >
                                    {navItem.label.replace(/[\[\]]/g, '')}
                                </Button>
                            ))}
                            {/* Gold accent line */}
                            <div className="hidden lg:block mt-4 h-px w-full bg-gradient-to-r from-[rgba(212,175,55,0.3)] to-transparent" />
                        </div>
                    </div>

                    {/* RIGHT — Tab Content */}
                    <div className="flex-1 min-w-0 pr-4 animate-fade-in flex flex-col min-h-0 overflow-y-scroll  custom-scrollbar pr-2 ">

                        {activeTab === 'order' ? (
                            <>
                                {/* Hero Section */}
                                <div className="mb-4 flex-shrink-0">
                                    <div className="text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,1)]/[0-9]* rounded-full text-[10px] font-semibold text-[rgba(160,130,30,1)] uppercase tracking-widest mb-2">
                                            <Leaf className="w-3 h-3" />
                                            Premium Quality
                                        </div>
                                        <h1 className="text-2xl lg:text-4xl font-serif font-bold text-zabra-dark tracking-tight mb-2">
                                            {data.title}
                                        </h1>
                                        <div className="h-1 w-12 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.2)] rounded-full mb-2" />
                                        <p className="text-gray-500 text-xs lg:text-sm font-sans leading-relaxed">
                                            {data.categoryLabel} — Sourced with care, crafted for excellence.
                                        </p>
                                    </div>
                                </div>

                                {/* Spec Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 lg:gap-3 mb-6 flex-shrink-0">
                                    {specs.map((spec) => (
                                        <div
                                            key={spec.key}
                                            className="flex flex-col items-center justify-center text-center p-2 lg:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-[rgba(212,175,55,0.3)] hover:shadow-md hover:shadow-[rgba(212,175,55,0.04)] transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-[rgba(160,130,30,1)] group-hover:bg-[rgba(212,175,55,0.15)] transition-colors duration-300 mb-1.5">
                                                {SPEC_ICONS[spec.key]}
                                            </div>
                                            <div className="min-w-0 w-full px-1">
                                                <p className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{spec.label}</p>
                                                <p className="text-xs font-semibold text-zabra-dark truncate">{spec.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Section Title */}
                                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                                    <h2 className="text-xl lg:text-2xl font-serif font-bold text-zabra-dark tracking-tight">Available Formats</h2>
                                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                                </div>

                                {/* Product Variant Cards Carousel */}
                                <div className="relative w-full pb-2">
                                    <div className="overflow-hidden" ref={emblaRef}>
                                        <div className="flex -ml-4">
                                            {/* We spread variants to ensure we have enough items for a nice loop if there's less than 3 */}
                                            {[...data.variants, ...(data.specialVariants || []), ...data.variants, ...(data.specialVariants || [])].map((v, i) => (
                                                <div key={`variant-${i}`} className="flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_33.333%] pl-4">
                                                    <div className="relative h-full">
                                                        {(v as any).title && (
                                                            <div className="absolute -top-3 left-4 z-10">
                                                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(180,150,40,0.9)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                                                                    {(v as any).title}
                                                                </span>
                                                            </div>
                                                        )}
                                                        <StoreProductCard
                                                            volume={v.volume}
                                                            category={(v as any).category || data.categoryLabel}
                                                            price={v.price}
                                                            image={data.image}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="w-full lg:pl-16 py-8 animate-fade-in bg-white/40 rounded-3xl p-6 lg:p-12 mb-10">
                                <h1 className="text-3xl lg:text-5xl font-serif font-bold text-zabra-dark tracking-tight mb-4">
                                    {data.pages[activeTab]?.title}
                                </h1>
                                <div className="h-1 w-16 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.2)] rounded-full mb-8" />
                                <div
                                    className="prose prose-lg lg:prose-xl max-w-none font-sans text-gray-600
                                        prose-headings:font-serif prose-headings:text-zabra-dark prose-headings:tracking-tight
                                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                        prose-p:leading-relaxed prose-p:mb-4
                                        prose-strong:text-zabra-dark prose-strong:font-semibold
                                        prose-ul:my-4 prose-ul:space-y-2
                                        prose-li:text-gray-600
                                        prose-li:marker:text-[rgba(212,175,55,0.9)]"
                                    dangerouslySetInnerHTML={{ __html: data.pages[activeTab]?.content || '' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
