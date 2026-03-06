'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import InteractiveMap from './InteractiveMap';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function TerroirSection() {
    const [activeRegion, setActiveRegionState] = useState<string | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const currentIndexRef = useRef(-1);
    const isPausedRef = useRef(false);

    // Auto-play logic
    useEffect(() => {
        const startAutoPlay = () => {
            autoPlayRef.current = setInterval(() => {
                if (!isPausedRef.current) {
                    const nextIndex = (currentIndexRef.current + 1) % products.length;
                    currentIndexRef.current = nextIndex;
                    setActiveRegionState(products[nextIndex].id);
                }
            }, 3000); // Wait 2.5 seconds before moving to next region
        };

        startAutoPlay();

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    // Wrapper for setting active region to handle manual pauses
    const handleSetActiveRegion = useCallback((regionId: string | null) => {
        // Update state
        setActiveRegionState(regionId);

        // Update index if it's a valid region
        if (regionId) {
            const index = products.findIndex(p => p.id === regionId);
            if (index !== -1) {
                currentIndexRef.current = index;
            }
        }

        // Pause auto-play temporarily
        isPausedRef.current = true;

        // Clear any existing resume timeout
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }

        // Set a timeout to resume auto-play after 4 seconds of inactivity
        hoverTimeoutRef.current = setTimeout(() => {
            isPausedRef.current = false;

            // Instantly go to next if currently null, so the map isn't blank
            setActiveRegionState((current) => {
                if (current === null) {
                    const nextIndex = (currentIndexRef.current + 1) % products.length;
                    currentIndexRef.current = nextIndex;
                    return products[nextIndex].id;
                }
                return current;
            });
        }, 4000);
    }, []);

    return (
        <section className="relative w-full h-screen min-h-[800px]  bg-[#FDFBF7] overflow-hidden flex flex-col items-center justify-center">

            <div className="mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 items-start w-full h-full max-w-[1800px]">

                {/* Left Column: Text Content */}
                <div className="text-left z-10 relative mt-[4rem] flex flex-col justify-center max-w-[600px] mx-auto lg:mx-0 order-2 lg:order-1 lg:pl-12 lg:pr-8">
                    {/* Premium badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.25)] rounded-full text-xs font-bold text-[rgba(160,130,30,1)] uppercase tracking-[0.15em] mb-5 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-[rgba(212,175,55,0.8)]" />
                        From Morocco&apos;s Finest Regions
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] mb-6 leading-[1.08] tracking-tight">
                        Pure Moroccan Terroir,<br />
                        <span className="bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[rgba(160,130,30,1)] bg-clip-text text-transparent">
                            Expertly Selected.
                        </span>
                    </h1>

                    {/* Gold accent line */}
                    <div className="h-1 w-14 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.15)] rounded-full mb-6" />

                    <div className="space-y-4">
                        <p className="text-base lg:text-lg text-[#555] leading-relaxed">
                            ZABRA brings you <strong className="text-[#1A1A1A] font-semibold">cold-pressed olive oil</strong> from Beni Mellal, <strong className="text-[#1A1A1A] font-semibold">pure argan oil</strong> from the argan forests of Essaouira, and <strong className="text-[#1A1A1A] font-semibold">hand-picked Medjool dates</strong> from the Ziz Valley — each sourced at its peak, directly from the land.
                        </p>
                        <p className="text-base lg:text-lg text-[#555] leading-relaxed">
                            Every product is personally selected for quality and packaged in <strong className="text-[#1A1A1A] font-semibold">protective, travel-ready</strong> materials so it reaches you exactly as nature intended.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="/products/olive-oil"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-sm font-semibold uppercase tracking-wider rounded-xl hover:bg-[#333] transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5"
                        >
                            Explore Products
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <span className="text-xs text-gray-400 font-medium tracking-wide hidden sm:inline">
                            3 premium products
                        </span>
                    </div>
                </div>

                {/* Right Column: Map Container */}
                <div className=" w-full relative z-0 flex justify-center  -ml-[8rem] mt-[3rem]    items-start order-1 lg:order-2">
                    {/* Map explicitly sized to act as anchor for edge cards */}
                    <div className="relative w-full max-w-[380px] lg:max-w-[500px] xl:max-w-[580px] aspect-[566/603]">
                        <InteractiveMap activeRegion={activeRegion} setActiveRegion={handleSetActiveRegion} />

                        {/* Connecting Lines Overlay */}
                        <svg viewBox="0 0 566.14 603.23" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {products.map(product => {
                                const isActive = activeRegion === product.id;
                                return (
                                    <g key={`line-${product.id}`} className={`transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-60 drop-shadow-none'}`} style={{ filter: isActive ? `drop-shadow(0 0 8px ${product.color})` : 'none' }}>
                                        <path
                                            d={product.linePath}
                                            fill="none"
                                            stroke={product.color.replace('0.8', '0.8')}
                                            strokeWidth={isActive ? "3" : "1.5"}
                                            strokeDasharray={isActive ? "none" : "6,6"}
                                            className="transition-all duration-700"
                                        />
                                        <circle
                                            cx={product.mapDot.cx}
                                            cy={product.mapDot.cy}
                                            r={isActive ? "6" : "3"}
                                            fill={product.color.replace('0.6', '1')}
                                            className="transition-all duration-700"
                                        />

                                    </g>
                                );
                            })}
                        </svg>

                        {/* Desktop Absolute Cards (hidden on mobile, managed by ProductCard hidden md:flex) */}
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                activeRegion={activeRegion}
                                setActiveRegion={handleSetActiveRegion}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Stacked Cards (visible only on mobile) */}
                <div className="flex flex-col gap-4 mt-12 md:hidden w-full max-w-md mx-auto z-10 relative">
                    {products.map(product => (
                        <div
                            key={`mobile-${product.id}`}
                            className={`flex items-center p-4 bg-white/90 backdrop-blur-md rounded-2xl border transition-all duration-300 cursor-pointer
                ${activeRegion === product.id ? 'scale-105 shadow-xl border-[color:var(--brand-color)]' : 'shadow border-gray-100'}
              `}
                            style={{ '--brand-color': product.color } as React.CSSProperties}
                            onMouseEnter={() => handleSetActiveRegion(product.id)}
                            onMouseLeave={() => handleSetActiveRegion(null)}
                            onClick={() => window.location.href = product.link}
                        >
                            <div className="relative w-20 h-24 mr-4 flex-shrink-0">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-md" />
                            </div>
                            <div className="flex-col flex flex-grow text-left">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">{product.regionName}</span>
                                <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
                                <span
                                    className="px-4 py-1.5 text-white text-sm font-semibold rounded-full w-max"
                                    style={{ backgroundColor: product.color.replace('0.6', '1') }}
                                >
                                    Order Now
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
