"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Grid } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { NEWS_CATEGORIES } from "@/app/constants/board";

export default function MainNews() {
    const [activeTab, setActiveTab] = useState<string>("all");
    const containerRef = useRef<HTMLDivElement>(null);

    // 테스트(임시데이터)
    const currentSlides = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        title: `${activeTab} 동문소식 임시 뉴스 제목 ${i + 1}`,
        writer: "Aliquip ut ad in",
        date: "07-Feb-1979",
        image: `/assets/images/main/img-news0${(i % 9) + 1}.jpg`,
    }));

    const slidesPerGroup = 4;
    const calculatedGroupSize = slidesPerGroup * 2; // 8개
    const remainder = currentSlides.length % calculatedGroupSize;
    const missingSlides = remainder === 0 ? 0 : calculatedGroupSize - remainder;
    const emptySlidesCount = missingSlides > 0 ? missingSlides : 0;

    // 높이 계산
    const setBoxHeight = () => {
        if (!containerRef.current) return;
        const parentBox = containerRef.current.querySelector('.main-news-box') as HTMLElement;
        const activeContent = containerRef.current.querySelector('.miniboard-content') as HTMLElement;

        if (parentBox && activeContent) {
            const contentTop = activeContent.offsetTop;
            const contentHeight = activeContent.offsetHeight;
            parentBox.style.height = `${contentTop + contentHeight}px`;
        }
    };

    useEffect(() => {
        setBoxHeight();
        window.addEventListener('resize', setBoxHeight);
        return () => {
            window.removeEventListener('resize', setBoxHeight);
        };
    }, [activeTab, currentSlides]);

    return (
        <div className="main-content-wrap main-content-wrap04" ref={containerRef}>
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <h3 className="main-title">동문소식</h3>
                    <div className="main-news-box">
                        <ul className="mini-tab-box custom-scrollbar">
                            {NEWS_CATEGORIES.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li key={tab.id} className={isActive ? "active" : ""}>
                                        <a
                                            href="#none"
                                            title={tab.label}
                                            className="btn-mini-tab"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveTab(tab.id);
                                            }}
                                        >
                                            {tab.label}
                                        </a>
                                        {isActive && (
                                            <div className="miniboard-content">
                                                <Swiper
                                                    modules={[Navigation, Autoplay, Grid]}
                                                    loop={false}
                                                    navigation={{
                                                        prevEl: '.main-news-prev',
                                                        nextEl: '.main-news-next',
                                                    }}
                                                    breakpoints={{
                                                        1280: {
                                                            slidesPerView: 4,
                                                            slidesPerGroup: 4,
                                                            spaceBetween: 40,
                                                            grid: { rows: 2, fill: 'row' },
                                                        },
                                                        1024: {
                                                            slidesPerView: 4,
                                                            slidesPerGroup: 4,
                                                            spaceBetween: 20,
                                                            grid: { rows: 2, fill: 'row' },
                                                        },
                                                        0: {
                                                            slidesPerView: 'auto',
                                                            slidesPerGroup: 1,
                                                            spaceBetween: 16,
                                                            grid: { rows: 1, fill: 'row' },
                                                        }
                                                    }}
                                                    onInit={setBoxHeight}
                                                    onResize={setBoxHeight}
                                                    onUpdate={setBoxHeight}
                                                    className="main-news-swiper"
                                                >
                                                    {/* 최대 16개 */}
                                                    {currentSlides.slice(0, 16).map((item, index) => (
                                                        <SwiperSlide key={item.id || index}>
                                                            <Link className="news-con-box" href="#none">
                                                                <div className="news-img-box">
                                                                    <img src={item.image} alt="" />
                                                                </div>
                                                                <div className="news-dim-box">
                                                                    <div className="news-txt-box">
                                                                        <p className="news-title">
                                                                            <span className="title">{item.title}</span>
                                                                            <span className="writer">{item.writer}</span>
                                                                        </p>
                                                                        <p className="news-detail">
                                                                            {item.date}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </SwiperSlide>
                                                    ))}

                                                    {Array.from({ length: emptySlidesCount }).map((_, idx) => (
                                                        <SwiperSlide key={`empty-${idx}`} className="empty-slide" />
                                                    ))}
                                                </Swiper>

                                                <div className="control-wrap">
                                                    <button className="main-news-prev" type="button">
                                                        이전
                                                    </button>
                                                    <button className="main-news-next" type="button">
                                                        다음
                                                    </button>
                                                </div>
                                                <Link className="btn-more" href="#none">VIEW MORE</Link>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}