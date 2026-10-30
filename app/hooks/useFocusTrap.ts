'use client';

import { useEffect, useRef } from 'react';

export function useFocusTrap(isOpen: boolean, onClose: () => void) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const popupEl = popupRef.current;
    if (!popupEl) return;

    const focusableElements = popupEl.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    popupEl.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키 입력 시 팝업 닫기
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Tab 키 누를 때 내부 포커스 트랩 순환
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl || document.activeElement === popupEl) {
            e.preventDefault();
            lastEl?.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return popupRef;
}