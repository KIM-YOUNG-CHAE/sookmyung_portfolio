'use client';

import Link from 'next/link';
import { NAV_ITEM } from '@/app/constants/navigation';
import LayerPopup from '@/app/components/common/LayerPopup';
import { usePopup } from '@/app/hooks/usePopup';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const { openPopup, closePopup, isOpen } = usePopup();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean | null>(false);
    const [openMobileSubMenu, setOpenMobileSubMenu] = useState<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const subMenuRefs = useRef<(HTMLUListElement | null)[]>([]);

    useEffect(() => {
        const updateGnbBgHeight = () => {
            if (!headerRef.current) return;
            const subMenus = headerRef.current.querySelectorAll<HTMLElement>(".sub-mn");
            const gnbBg = headerRef.current.querySelector<HTMLElement>(".gnb-bg");
            if (subMenus.length === 0 || !gnbBg) return;

            let maxHeight = 0
            subMenus.forEach((menu) => {
                if (menu.offsetHeight > maxHeight) {
                    maxHeight = menu.offsetHeight;
                }
            })
            gnbBg.style.height = `${maxHeight}px`;
        }

        updateGnbBgHeight();
        window.addEventListener('resize', updateGnbBgHeight);
        return () => window.removeEventListener('resize', updateGnbBgHeight);

    }, []);

    const handleOpenGnb = () => {
        document.body.classList.add('gnb-open');
    };

    const handleCloseGnb = (e: React.FocusEvent<HTMLElement>) => {
        if (e.relatedTarget && headerRef.current?.contains(e.relatedTarget as Node)) {
            return;
        }
        document.body.classList.remove('gnb-open');
    };

    const handleMouseLeave = () => {
        document.body.classList.remove('gnb-open');
    };
    useEffect(() => {
        return () => {
            document.body.classList.remove('gnb-open');
        };
    }, []);

    // 모바일 메뉴 핸들러
    const handleOpenMobileMenu = () => {
        setIsMobileMenuOpen(true);
        document.body.classList.add('m-gnb-open');
    };
    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('m-gnb-open');
    };
    useEffect(() => {
        return () => {
            setIsMobileMenuOpen(false);
            document.body.classList.remove('m-gnb-open');
        };
    }, []);
    const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, hasSubMenus: boolean) => {
        if (hasSubMenus) {
            e.preventDefault();
            setOpenMobileSubMenu(prev => (prev === index ? null : index));
        } else {
            handleCloseMobileMenu();
        }
    };


    return (
        <header 
            className="header-wrap" 
            ref={headerRef} 
            onMouseLeave={handleMouseLeave}
            onFocus={handleOpenGnb}
            onBlur={handleCloseGnb}
        >
            <div className="header-box">
                <h1 className="header-logo">
                    <Link href="/">
                        <span>숙명여자대학교 디자인학과</span>
                    </Link>
                </h1>

                <nav className="gnb mobile-hide">
                    <ul className="gnb-ul">
                        {NAV_ITEM.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path} onMouseEnter={handleOpenGnb}>{item.title}</Link>
                                {item.subMenus && item.subMenus.length > 0 && (
                                    <ul className="sub-mn">
                                        {item.subMenus.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.path}>{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    type="button"
                    className="btn-sitemap-open mobile-hide"
                    data-popup-target="sitemap"
                    onClick={() => openPopup('sitemap')}
                >
                    사이트맵
                </button>
            </div>
            <LayerPopup
                isOpen={isOpen('sitemap')}
                popupType="sitemap"
                onClose={closePopup}
                title="사이트맵"
            >
                <ul className="sitemap-menu-list">
                    {NAV_ITEM.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} onClick={closePopup}>
                                {item.title}
                            </Link>
                            {item.subMenus && item.subMenus.length > 0 && (
                                <ul>
                                    {item.subMenus.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.path} onClick={closePopup}>
                                                {subItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </LayerPopup>

            <button className="pc-hide btn-menu" type="button" onClick={handleOpenMobileMenu} title="모바일 메뉴 열기">모바일 메뉴 열기</button>
            <nav className={`m-gnb pc-hide ${isMobileMenuOpen ? 'on' : ''}`}>
                <ul className="m-gnb-ul">
                    {NAV_ITEM.map((item, index) => {
                        const hasSub = Boolean(item.subMenus && item.subMenus.length > 0);
                        const isSubOpen = openMobileSubMenu === index;
                        return (
                            <li key={index} className={`${hasSub ? 'has-sub' : ''} ${isSubOpen ? 'active' : ''}`}>
                                <Link
                                    href={item.path || '#none'}
                                    onClick={(e) => handleMobileMenuClick(e, index, hasSub)}
                                >
                                    {item.title}
                                </Link>
                                {hasSub && (
                                    <ul
                                        className={`m-sub-mn ${isSubOpen ? 'open' : ''}`}
                                        ref={(el) => { subMenuRefs.current[index] = el; }}
                                        style={{
                                            height: isSubOpen ? `${subMenuRefs.current[index]?.scrollHeight}px` : '0px'
                                        }}
                                    >
                                        {item.subMenus!.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.path} onClick={handleCloseMobileMenu}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
                <button className="close-menu" type="button" onClick={handleCloseMobileMenu} title="모바일 메뉴 닫기">모바일 메뉴 닫기</button>
            </nav>

            <div className="gnb-bg mobile-hide">&nbsp;</div>
            

        </header>
    );
}