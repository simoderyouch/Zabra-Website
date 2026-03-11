'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/context/LanguageContext';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Future: hook up to an API route or email service
    };

    return (
        <main className="bg-[#FDFBF7] min-h-screen pt-[10px]">

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-16 lg:py-24 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] rounded-full text-xs font-bold text-[rgba(160,130,30,1)] uppercase tracking-widest mb-6">
                            <Mail className="w-3.5 h-3.5" />
                            {t('contact.badge')}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
                            {t('contact.title')} <span className="text-[rgba(212,175,55,0.9)]">{t('contact.titleHighlight')}</span>
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[rgba(212,175,55,0.9)] to-[rgba(212,175,55,0.2)] rounded-full mb-6" />
                        <p className="text-gray-500 font-sans leading-relaxed text-lg">
                            {t('contact.heroDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-20 lg:pb-28">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* Left — Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight mb-6">{t('contact.reachOut')}</h2>
                                <div className="space-y-5">
                                    {[
                                        { icon: <Mail className="w-5 h-5" />, label: t('contact.email'), value: 'contact@zabra.ma', href: 'mailto:contact@zabra.ma' },
                                        { icon: <Phone className="w-5 h-5" />, label: t('contact.phone'), value: '+212 6 00 00 00 00', href: 'tel:+212600000000' },
                                        { icon: <MapPin className="w-5 h-5" />, label: t('contact.location'), value: 'Beni Mellal, Morocco', href: '#' },
                                    ].map((item, i) => (
                                        <a key={i} href={item.href} className="flex items-start gap-4 group">
                                            <div className="w-11 h-11 rounded-xl bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-[rgba(170,140,40,1)] flex-shrink-0 group-hover:bg-[rgba(212,175,55,0.15)] transition-colors duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                                <p className="text-[#1A1A1A] font-semibold text-sm group-hover:text-[rgba(212,175,55,0.9)] transition-colors">{item.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t('contact.followUs')}</h3>
                                <div className="flex gap-3">
                                    {[
                                        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
                                        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} aria-label={social.label} className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[rgba(212,175,55,0.9)] hover:border-[rgba(212,175,55,0.3)] hover:shadow-md transition-all duration-300">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="hidden lg:block pt-6">
                                <div className="p-6 rounded-2xl bg-white border border-gray-100">
                                    <p className="text-[10px] font-bold text-[rgba(160,130,30,1)] uppercase tracking-widest mb-3">{t('contact.businessHours')}</p>
                                    <div className="space-y-2 text-sm font-sans text-gray-600">
                                        <div className="flex justify-between"><span>{t('contact.monFri')}</span><span className="font-semibold text-[#1A1A1A]">9:00 — 18:00</span></div>
                                        <div className="flex justify-between"><span>{t('contact.saturday')}</span><span className="font-semibold text-[#1A1A1A]">9:00 — 14:00</span></div>
                                        <div className="flex justify-between"><span>{t('contact.sunday')}</span><span className="text-gray-400">{t('contact.closed')}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                                {submitted ? (
                                    <div className="text-center py-16 animate-fade-in">
                                        <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center mx-auto mb-6">
                                            <Send className="w-7 h-7 text-[rgba(212,175,55,0.9)]" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-3">{t('contact.sentTitle')}</h3>
                                        <p className="text-gray-500 font-sans max-w-sm mx-auto">{t('contact.sentDesc')}</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                                            className="mt-8 text-sm text-[rgba(212,175,55,0.9)] font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-1.5"
                                        >
                                            {t('contact.sendAnother')} <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="mb-2">
                                            <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight">{t('contact.sendMessage')}</h2>
                                            <p className="text-gray-400 text-sm mt-1">{t('contact.formSubtitle')}</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('contact.fullName')}</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-gray-200 text-sm font-sans text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all"
                                                    placeholder={t('contact.yourName')}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('contact.emailLabel')}</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-gray-200 text-sm font-sans text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all"
                                                    placeholder={t('contact.yourEmail')}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('contact.subject')}</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-gray-200 text-sm font-sans text-[#1A1A1A] focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all appearance-none"
                                            >
                                                <option value="">{t('contact.selectSubject')}</option>
                                                <option value="general">{t('contact.generalInquiry')}</option>
                                                <option value="order">{t('contact.orderQuestion')}</option>
                                                <option value="wholesale">{t('contact.wholesale')}</option>
                                                <option value="partnership">{t('contact.partnership')}</option>
                                                <option value="other">{t('contact.other')}</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('contact.message')}</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-gray-200 text-sm font-sans text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[rgba(212,175,55,0.5)] focus:ring-2 focus:ring-[rgba(212,175,55,0.1)] transition-all resize-none"
                                                placeholder={t('contact.tellUs')}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full py-4 h-auto bg-[#1A1A1A] hover:bg-[#333] text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-lg"
                                        >
                                            <Send className="w-4 h-4 mr-2" />
                                            {t('contact.send')}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
