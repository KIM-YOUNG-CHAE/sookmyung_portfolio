'use client';

import { useState, useRef, useEffect, useId } from 'react';

export function useRelatedBox() {

    const [isOpen, setIsOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mouseup', handleClickOutside);
        return () => document.removeEventListener('mouseup', handleClickOutside);
    }, []);

    const toggle = (e?: React.SyntheticEvent) => {
        if (e) e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
    };

    return {
        isOpen,
        wrapRef,
        
        toggle,
        handleKeyDown,
    };
}