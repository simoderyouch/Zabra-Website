'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface CartItem {
    id: string;
    category: string;
    volume: string;
    price: string;
    image: string;
    qty: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id' | 'qty'>, qty?: number) => void;
    removeItem: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
    clearCart: () => void;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = useCallback((item: Omit<CartItem, 'id' | 'qty'>, qty = 1) => {
        const id = `${item.category}-${item.volume}`;
        setItems(prev => {
            const existing = prev.find(i => i.id === id);
            if (existing) {
                return prev.map(i => i.id === id ? { ...i, qty: i.qty + qty } : i);
            }
            return [...prev, { ...item, id, qty }];
        });
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    }, []);

    const updateQty = useCallback((id: string, qty: number) => {
        if (qty <= 0) {
            setItems(prev => prev.filter(i => i.id !== id));
        } else {
            setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
