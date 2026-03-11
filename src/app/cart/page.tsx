'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import contactData from '@/data/contact.json';
import { useTranslation } from '@/context/LanguageContext';

const WHATSAPP_NUMBER = contactData.whatsappNumber;

export default function CartPage() {
    const { items, removeItem, updateQty, clearCart, totalItems } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const { t } = useTranslation();

    const handleWhatsAppOrder = () => {
        const itemsText = items.map(item =>
            `• ${item.category} — ${item.volume} × ${item.qty} (${item.price} each)`
        ).join('\n');

        const message = encodeURIComponent(
            `Bonjour ZABIRA! 🌿\n\n` +
            `📋 *New Order*\n\n` +
            `${itemsText}\n\n` +
            `👤 Name: ${name || 'Not provided'}\n` +
            `📞 Phone: ${phone || 'Not provided'}\n` +
            `📍 Address: ${address || 'Not provided'}\n` +
            `${note ? `📝 Note: ${note}\n` : ''}` +
            `\nThank you!`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-[900px] text-center">
                    <div className="flex flex-col items-center gap-6 py-20">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                            <ShoppingCart className="w-8 h-8 text-gray-300" />
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">{t('cart.emptyTitle')}</h1>
                        <p className="text-gray-500 max-w-md">{t('cart.emptyDesc')}</p>
                        <Link href="/products/olive-oil">
                            <Button className="bg-[#1A1A1A] text-white rounded-xl px-6 h-11 text-sm font-bold uppercase tracking-wider hover:bg-[rgba(212,175,55,0.9)] hover:text-[#1A1A1A] transition-all duration-300">
                                {t('cart.browseProducts')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1100px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <Link href="/products/olive-oil" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-3">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            {t('cart.continueShopping')}
                        </Link>
                        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                            {t('cart.yourCart')}
                            <span className="ml-3 text-lg font-sans font-normal text-gray-400">({totalItems} {totalItems === 1 ? t('cart.item') : t('cart.items')})</span>
                        </h1>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={clearCart}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 text-xs font-bold uppercase tracking-wider rounded-xl"
                    >
                        <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                        {t('cart.clearAll')}
                    </Button>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* LEFT — Cart Items */}
                    <div className="flex-1 space-y-4">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[rgba(212,175,55,0.2)] transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="w-16 h-20 relative flex-shrink-0 bg-gradient-to-br from-gray-50 to-[rgba(212,175,55,0.03)] rounded-xl overflow-hidden">
                                    {item.image && (
                                        <Image src={item.image} alt={item.category} fill className="object-contain p-1" />
                                    )}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.category}</p>
                                    <p className="text-sm font-bold text-[#1A1A1A]">{item.volume}</p>
                                    <p className="text-sm font-semibold text-[rgba(170,140,40,1)]">{item.price}</p>
                                </div>

                                {/* Qty Controls */}
                                <div className="flex items-center gap-1.5">
                                    <button
                                        onClick={() => updateQty(item.id, item.qty - 1)}
                                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                    >
                                        <Minus className="w-3 h-3 text-gray-600" />
                                    </button>
                                    <span className="w-8 text-center text-sm font-bold text-[#1A1A1A]">{item.qty}</span>
                                    <button
                                        onClick={() => updateQty(item.id, item.qty + 1)}
                                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                    >
                                        <Plus className="w-3 h-3 text-gray-600" />
                                    </button>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center transition-colors group"
                                >
                                    <Trash2 className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-500 transition-colors" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT — Order Form */}
                    <div className="lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-32 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 space-y-5 shadow-sm">
                            <h2 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                                <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
                                {t('cart.orderViaWhatsApp')}
                            </h2>

                            <Separator className="bg-gray-100" />

                            {/* Form Fields */}
                            <div className="space-y-3">
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{t('cart.fullNameRequired')}</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={t('cart.yourNamePlaceholder')}
                                        className="w-full h-10 px-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{t('cart.phoneRequired')}</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder={t('cart.phonePlaceholder')}
                                        className="w-full h-10 px-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{t('cart.deliveryAddress')}</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder={t('cart.addressPlaceholder')}
                                        className="w-full h-10 px-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{t('cart.noteOptional')}</label>
                                    <textarea
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        placeholder={t('cart.notePlaceholder')}
                                        rows={2}
                                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <Separator className="bg-gray-100" />

                            {/* Order Summary */}
                            <div className="space-y-2 text-sm">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between text-gray-600">
                                        <span className="truncate mr-2">{item.volume} × {item.qty}</span>
                                        <span className="font-semibold text-[#1A1A1A] whitespace-nowrap">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Send Button */}
                            <Button
                                onClick={handleWhatsAppOrder}
                                disabled={!name || !phone}
                                className="w-full h-12 bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-[#1EBE57] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                {t('cart.sendOrder')}
                            </Button>

                            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                {t('cart.orderNote')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
