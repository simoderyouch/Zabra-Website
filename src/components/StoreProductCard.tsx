'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface StoreProductCardProps {
    volume: string;
    category: string;
    price: string;
    image?: string;
    isArgan?: boolean;
}

export default function StoreProductCard({ volume, category, price, image }: StoreProductCardProps) {
    const [qty, setQty] = useState('01');
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({ category, volume, price, image: image || '' }, parseInt(qty));
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <Card className="group relative flex flex-col items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-[rgba(212,175,55,0.25)] hover:shadow-xl hover:shadow-[rgba(212,175,55,0.06)] transition-all duration-500 min-w-[180px] overflow-hidden">

            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            {/* Product Image */}
            <div className="relative w-full h-36 mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-[rgba(212,175,55,0.03)]">
                {image ? (
                    <div className="relative w-24 h-32 group-hover:scale-110 transition-transform duration-700 ease-out">
                        <Image
                            src={image}
                            alt={`${category} - ${volume}`}
                            fill
                            className="object-contain drop-shadow-lg"
                        />
                    </div>
                ) : (
                    <span className="text-gray-300 text-sm font-medium">No image</span>
                )}
            </div>

            {/* Volume Badge */}
            <div className="relative z-10 inline-flex items-center px-3 py-1 bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-sm">
                {volume}
            </div>

            {/* Product Details */}
            <CardContent className="relative z-10 text-center w-full space-y-1.5 p-0 flex-grow flex flex-col justify-end">
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase">
                    {category}
                </p>
                <p className="text-xl font-bold text-[#1A1A1A] font-sans">
                    {price}
                </p>

                <div className="flex items-end gap-2 w-full mt-4 relative z-10">
                    {/* Qty Selector */}
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Qty</span>
                        <Select defaultValue="01" onValueChange={setQty}>
                            <SelectTrigger className="w-[70px] h-10 text-xs rounded-xl border-gray-200 focus:ring-[rgba(212,175,55,0.6)] focus:border-[rgba(212,175,55,0.4)]">
                                <SelectValue placeholder="Qty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="01">01</SelectItem>
                                <SelectItem value="02">02</SelectItem>
                                <SelectItem value="03">03</SelectItem>
                                <SelectItem value="04">04</SelectItem>
                                <SelectItem value="05">05</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Add to Cart */}
                    <Button
                        onClick={handleAddToCart}
                        className={`flex-1 h-10 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group/btn flex items-center justify-center gap-2 ${added
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-[#1A1A1A] text-white hover:bg-[rgba(212,175,55,0.9)] hover:text-[#1A1A1A]'
                            }`}
                    >
                        {added ? (
                            <>
                                <Check className="w-3.5 h-3.5" />
                                Added!
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                                Add to Cart
                            </>
                        )}
                    </Button>
                </div>

            </CardContent>

            {/* Add to Cart Button */}

        </Card>
    );
}
