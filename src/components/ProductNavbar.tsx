import Link from 'next/link';

export default function ProductNavbar() {
    return (
        <div className="absolute top-29 left-0 right-0 z-40 flex justify-center pointer-events-none mt-2 transition-all duration-300 hidden md:flex">
            <div className="bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 rounded-full h-14 px-8 flex items-center justify-center gap-10 pointer-events-auto transition-transform duration-500 hover:bg-white/95 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <ProductLink href="/products/olive-oil" label="Olive Oil" />
                <ProductLink href="/products/argan-oil" label="Argan Oil" />
                <ProductLink href="/products/dates" label="Dates" />
                <ProductLink href="/products/pack" label="Pack" />
            </div>
        </div>
    );
}

function ProductLink({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="relative group py-1">
            <span className="text-[14px] lg:text-[15px] font-extrabold text-[#1A1A1A] tracking-wider uppercase group-hover:text-[rgba(212,175,55,0.6)] transition-colors duration-300">
                {label}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[rgba(212,175,55,0.8)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(212,175,55,0.3)]"></span>
        </Link>
    );
}
