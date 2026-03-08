import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product, activeRegion, setActiveRegion }: { product: any, activeRegion: string | null, setActiveRegion: (region: string | null) => void }) {
    const isActive = activeRegion === product.id;

    return (
        <div
            className={`absolute flex flex-row items-center p-5 lg:p-6 bg-white/95 backdrop-blur-2xl rounded-[1.5rem] border transition-all duration-500 cursor-pointer hidden md:flex
                ${isActive ? 'scale-[1.04] z-20 shadow-[0_20px_40px_-10px_var(--shadow-color)]' : 'scale-100 shadow-[0_8px_30px_-5px_rgba(0,0,0,0.06)] z-10 border-gray-100/80 hover:border-gray-200'}
                ${product.position} w-80 lg:w-[23rem]
            `}

            onMouseEnter={() => setActiveRegion(product.id)}
            onMouseLeave={() => setActiveRegion(null)}
        >
            {/* Product Image */}
            <div className={`relative w-28 h-28 lg:w-36 lg:h-36 mr-5 lg:mr-6 flex-shrink-0 transition-transform duration-500 ease-out ${isActive ? 'scale-110 drop-shadow-xl' : 'hover:scale-105 drop-shadow-md'}`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 144px"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow text-left justify-center">
                <span className="text-[11px] lg:text-[12px] font-bold text-gray-400 w-[7rem] uppercase tracking-[0.2em] mb-1">{product.regionName}</span>
                <h3 className="font-extrabold text-gray-900 w-[12rem] text-xl lg:text-2xl mb-4 leading-tight tracking-tight">{product.name}</h3>

                {/* Order Button with Icon */}
                <Link
                    href={product.link}
                    className="group inline-flex items-center justify-between px-5 py-2.5 text-white text-sm font-bold rounded-full overflow-hidden w-max shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: product.color.replace('0.6', '1') }} // Solid color
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    <span className="relative z-10 mr-2">Order Now</span>
                    <svg
                        className="w-4 h-4 ml-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
