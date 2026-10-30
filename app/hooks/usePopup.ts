'use client';

import { useState } from 'react';

export function usePopup() {
    const [activePopup, setActivePopup] = useState<string | null>(null);

    const openPopup = (type: string) => setActivePopup(type);
    const closePopup = () => setActivePopup(null);

    return {
        activePopup,
        openPopup,
        closePopup,
        isOpen: (type: string) => activePopup === type,        
    };
}