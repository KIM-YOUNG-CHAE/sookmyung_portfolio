'use client';

import { useEffect } from 'react';
import { useFocusTrap } from '@/app/hooks/useFocusTrap';

interface LayerPopupProps {
    isOpen: boolean;
    popupType: string; 
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function LayerPopup({isOpen, popupType, onClose, title, children,}: LayerPopupProps){
    const popupRef = useFocusTrap(isOpen, onClose);

    // 팝업 열릴 때 배경 스크롤 고정
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // 바깥 (Dim/Wrap) 영역 클릭 시 닫기
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={popupRef}
            className={`sitemap-wrap js-popup-wrap ${isOpen ? 'active' : ''}`}
            data-popup-type={popupType}
            style={{ display: 'block' }}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}
        >
            <div className={`${popupType}-box`}>
                {title && (
                    <div className={`${popupType}-title-box`}>
                        <p>{title}</p>
                    </div>
                )}

                <div className={`${popupType}-con-box`}>
                    {children}
                </div>

                <a
                    href="#none"
                    className="btn-sitemap-close js-popup-close popup-layer-last-child"
                    onClick={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    <span className="hide">전체 메뉴 닫기</span>
                </a>
            </div>
        </div>
    );
}