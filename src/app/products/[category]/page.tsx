'use client';

import { useState } from 'react';
import Image from 'next/image';
import StoreProductCard from '@/components/StoreProductCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import categoryDataRecord from '@/data/categoryData.json';
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

const typedCategoryData: CategoryDataRecordType = categoryDataRecord;

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

    // If the category from URL doesn't exist in our JSON data, trigger Next.js 404 page
    if (!data) {
        notFound();
    }

    const specs = [
        { key: 'category', label: 'Category', value: data.categoryLabel },
        { key: 'extraction', label: 'Extraction', value: data.extraction },
        { key: 'texture', label: 'Texture', value: data.texture },
        { key: 'formats', label: 'Formats', value: data.formats },
        { key: 'acidityLevel', label: 'Acidity Level', value: data.acidityLevel },
        { key: 'conditionement', label: 'Packaging', value: data.conditionement },
        { key: 'conservation', label: 'Conservation', value: data.conservation },
    ];

    return (
        <main className="min-h-screen bg-[#FDFBF7] pt-10 pb-15 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
                    {/* Product Image */}
                    <div className="relative w-full max-w-[320px] lg:max-w-[380px] aspect-square flex-shrink-0">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.12)] via-transparent to-[rgba(212,175,55,0.06)] rounded-3xl blur-2xl scale-110" />
                        <div className="relative w-full h-full animate-float">
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] rounded-full text-xs font-semibold text-[rgba(160,130,30,1)] uppercase tracking-widest mb-4">
                            <Leaf className="w-3 h-3" />
                            Premium Quality
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-4">
                            {data.title}
                        </h1>
                        <div className="h-1 w-16 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.2)] rounded-full mx-auto lg:mx-0 mb-5" />
                        <p className="text-gray-500 text-base lg:text-lg font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {data.categoryLabel} — Sourced with care, crafted for excellence.
                        </p>
                    </div>
                </div>

                <Separator className="bg-gray-200/60 mb-10" />

                {/* Two-column layout: Sticky Nav Left + Content Right */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* LEFT — Sticky Vertical Nav */}
                    <div className="lg:w-44 flex-shrink-0">
                        <div className="sticky top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                            {data.sideNav.map((navItem) => (
                                <Button
                                    key={navItem.id}
                                    variant={activeTab === navItem.id ? 'default' : 'ghost'}
                                    onClick={() => setActiveTab(navItem.id)}
                                    className={`
                                        justify-start whitespace-nowrap lg:w-full px-4 py-2.5 h-auto text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl
                                        ${activeTab === navItem.id
                                            ? 'bg-[#1A1A1A] text-white shadow-lg shadow-black/10 hover:bg-[#333]'
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
                    <div className="flex-1 min-w-0 animate-fade-in">
                        {activeTab === 'order' ? (
                            <>
                                {/* Spec Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-14">
                                    {specs.map((spec) => (
                                        <div
                                            key={spec.key}
                                            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-[rgba(212,175,55,0.3)] hover:shadow-md hover:shadow-[rgba(212,175,55,0.04)] transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-[rgba(170,140,40,1)] group-hover:bg-[rgba(212,175,55,0.15)] transition-colors duration-300">
                                                {SPEC_ICONS[spec.key]}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{spec.label}</p>
                                                <p className="text-sm font-semibold text-[#1A1A1A] truncate">{spec.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Section Title */}
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight">Available Formats</h2>
                                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                                </div>

                                {/* Product Variant Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                                    {data.variants.map((v, i) => (
                                        <StoreProductCard
                                            key={`variant-${i}`}
                                            volume={v.volume}
                                            category={data.categoryLabel}
                                            price={v.price}
                                            image={data.image}
                                        />
                                    ))}

                                    {data.specialVariants && data.specialVariants.map((sp, i) => (
                                        <div key={`special-variant-${i}`} className="relative">
                                            <div className="absolute -top-3 left-4 z-10">
                                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(180,150,40,0.9)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                                                    {sp.title}
                                                </span>
                                            </div>
                                            <StoreProductCard
                                                volume={sp.volume}
                                                category={sp.category}
                                                price={sp.price}
                                                image={data.image}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="w-full  pl-[4rem]  py-8 lg:py-12 animate-fade-in">
                                <h1 className="text-3xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-4">
                                    {data.pages[activeTab]?.title}
                                </h1>
                                <div className="h-1 w-16 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.2)] rounded-full mb-8" />
                                <div
                                    className="prose prose-lg lg:prose-xl max-w-none font-sans text-gray-600
                                        prose-headings:font-serif prose-headings:text-[#1A1A1A] prose-headings:tracking-tight
                                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                        prose-p:leading-relaxed prose-p:mb-4
                                        prose-strong:text-[#1A1A1A] prose-strong:font-semibold
                                        prose-ul:my-4 prose-ul:space-y-2
                                        prose-li:text-gray-600
                                        prose-li:marker:text-[rgba(212,175,55,0.7)]"
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
