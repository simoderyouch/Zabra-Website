'use client';

import React from 'react';
import { useTranslation } from '@/context/LanguageContext';

export default function Accordion({
    summaryPreview,
    fullText
}: {
    summaryPreview: React.ReactNode;
    fullText: React.ReactNode;
}) {
    const { t } = useTranslation();

    return (
        <details className="group  text-gray-600">
            <summary className="cursor-pointer list-none outline-none leading-relaxed [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">
                    {summaryPreview}... <span className="text-[rgba(212,175,55,0.9)] ml-1 text-xs font-bold uppercase tracking-widest hover:underline">{t('common.readMore')}</span>
                </span>
                <span className="hidden group-open:block">
                    <div className="leading-relaxed mb-3">{fullText}</div>
                    <span className="text-[rgba(212,175,55,0.9)] text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer">{t('common.showLess')}</span>
                </span>
            </summary>
        </details>
    );
}
