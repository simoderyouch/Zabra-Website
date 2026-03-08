'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav className="w-full  top-0 left-0 right-0 z-50 bg-[#FDFBF7] border-b border-gray-200/50  transition-all duration-300">
            <div className="container mx-auto px-6 py-5 lg:px-12 lg:py-6 flex items-center justify-between max-w-[1400px]">

                {/* Logo & Slogan */}
                <div className="flex items-center gap-4 lg:gap-6">
                    <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
                        <Image src="/logo.svg" alt="Zabra Logo" width={250} height={80} className="w-auto h-12 sm:h-16 lg:h-20" priority />
                    </Link>
                    <div className="hidden sm:flex flex-col justify-center text-[13px] sm:text-[10px] lg:text-[13px] font-semibold text-[#555] tracking-[0.2em] uppercase leading-tight border-l border-gray-300 pl-4 lg:pl-6 py-1">
                        <span>Three Lands</span>
                        <span>One Origin</span>
                        <span className="text-[rgba(212,175,55,0.9)] font-bold mt-0.5">Morocco</span>
                    </div>
                </div>

                {/* Navigation Wrapper */}
                <div className="hidden md:flex flex-row items-center gap-6 lg:gap-8 text-[13px] lg:text-[14px] font-bold text-[#1A1A1A] uppercase tracking-widest relative z-10">
                    <Link href="/" className="hover:text-[rgba(212,175,55,0.6)] transition-colors duration-300 relative group">
                        <span>Home</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/about-us" className="hover:text-[rgba(212,175,55,0.6)] transition-colors duration-300 relative group">
                        <span>About Us</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact-us" className="hover:text-[rgba(212,175,55,0.6)] transition-colors duration-300 relative group">
                        <span>Contact Us</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[rgba(212,175,55,0.6)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Vertical Divider */}
                    <div className="h-5 w-px bg-gray-300/80 mx-1 lg:mx-2"></div>

                    {/* Cart Icon */}
                    <Link href="/cart" className="relative hover:text-[rgba(212,175,55,0.6)] transition-colors duration-300 group">
                        <ShoppingCart className="w-5 h-5" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2.5 w-4.5 h-4.5 bg-[rgba(212,175,55,0.9)] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Language Selector Dropdown */}
                    <div className="flex items-center gap-1.5 cursor-pointer hover:bg-gray-100/80 transition-colors group px-3 py-1.5 rounded-full border border-transparent hover:border-gray-200">
                        <span className="transition-colors group-hover:text-[rgba(212,175,55,0.6)]">EN</span>
                        <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                {/* Mobile Menu Button  */}
                <div className="md:hidden flex items-center gap-3">
                    <Link href="/cart" className="relative p-2">
                        <ShoppingCart className="w-5 h-5 text-[#1A1A1A]" />
                        {totalItems > 0 && (
                            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[rgba(212,175,55,0.9)] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <button className="flex flex-col gap-[5px] p-3 group rounded-full hover:bg-gray-100/50 transition-colors" aria-label="Menu">
                        <div className="w-6 h-[2px] bg-[#1A1A1A] transition-all group-hover:w-full rounded-full"></div>
                        <div className="w-4 h-[2px] bg-[#1A1A1A] transition-all group-hover:w-full rounded-full self-end"></div>
                        <div className="w-6 h-[2px] bg-[#1A1A1A] transition-all group-hover:w-full rounded-full"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
