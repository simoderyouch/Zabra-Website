type Locale = 'en' | 'fr' | 'ar';

const productsData: Record<Locale, Array<{
    id: string;
    regionName: string;
    name: string;
    image: string;
    link: string;
    color: string;
    position: string;
    mapDot: { cx: number; cy: number };
    linePath: string;
}>> = {
    en: [
        {
            id: 'essaouira',
            regionName: 'Haha - Essaouira',
            name: 'Argan Oil',
            image: '/images/argan_product.png',
            link: '/products/argan-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[10%] right-[70%]',
            mapDot: { cx: 306, cy: 173 },
            linePath: 'M 306 173 Q 230 150 10 150'
        },
        {
            id: 'beni-mellal',
            regionName: 'Sraghna - Beni Mellal',
            name: 'Olive Oil',
            image: '/images/oil_product.png',
            link: '/products/olive-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[1%] left-[100%]',
            mapDot: { cx: 380, cy: 148 },
            linePath: 'M 380 148 Q 440 100 650 120'
        },
        {
            id: 'errachidia',
            regionName: 'Ziz Valley - Errachidia',
            name: 'Mejhoul Dates',
            image: '/images/date_product.png',
            link: '/products/dates',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[44%] left-[85%]',
            mapDot: { cx: 410, cy: 194 },
            linePath: 'M 410 194 Q 480 200 550 260'
        }
    ],
    fr: [
        {
            id: 'essaouira',
            regionName: 'Haha - Essaouira',
            name: "Huile d'Argan",
            image: '/images/argan_product.png',
            link: '/products/argan-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[10%] right-[70%]',
            mapDot: { cx: 306, cy: 173 },
            linePath: 'M 306 173 Q 230 150 10 150'
        },
        {
            id: 'beni-mellal',
            regionName: 'Sraghna - Beni Mellal',
            name: "Huile d'Olive",
            image: '/images/oil_product.png',
            link: '/products/olive-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[1%] left-[100%]',
            mapDot: { cx: 380, cy: 148 },
            linePath: 'M 380 148 Q 440 100 650 120'
        },
        {
            id: 'errachidia',
            regionName: 'Vallée du Ziz - Errachidia',
            name: 'Dattes Mejhoul',
            image: '/images/date_product.png',
            link: '/products/dates',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[44%] left-[85%]',
            mapDot: { cx: 410, cy: 194 },
            linePath: 'M 410 194 Q 480 200 550 260'
        }
    ],
    ar: [
        {
            id: 'essaouira',
            regionName: 'حاحا - الصويرة',
            name: 'زيت الأركان',
            image: '/images/argan_product.png',
            link: '/products/argan-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[10%] right-[70%]',
            mapDot: { cx: 306, cy: 173 },
            linePath: 'M 306 173 Q 230 150 10 150'
        },
        {
            id: 'beni-mellal',
            regionName: 'سراغنة - بني ملال',
            name: 'زيت الزيتون',
            image: '/images/oil_product.png',
            link: '/products/olive-oil',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[1%] left-[100%]',
            mapDot: { cx: 380, cy: 148 },
            linePath: 'M 380 148 Q 440 100 650 120'
        },
        {
            id: 'errachidia',
            regionName: 'وادي زيز - الراشيدية',
            name: 'تمور المجهول',
            image: '/images/date_product.png',
            link: '/products/dates',
            color: 'rgba(212, 175, 55, 0.6)',
            position: 'top-[44%] left-[85%]',
            mapDot: { cx: 410, cy: 194 },
            linePath: 'M 410 194 Q 480 200 550 260'
        }
    ]
};

export function getProducts(locale: Locale) {
    return productsData[locale];
}

// Default export for backward compat
export const products = productsData.en;
