'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TopBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDoNotShowToday, setIsDoNotShowToday] = useState(false);

    // 컴포넌트 마운트 시 쿠키 확인
    useEffect(() => {
        const todayCookie = Cookies.get('todayCookie');
        // 오늘 하루 보지 않기 쿠키가 설치되어 있지 않다면 배너 노출
        if (todayCookie !== 'done') {
            setIsVisible(true);
            document.body.classList.add('banner-open');
        }
    }, []);

    // 배너 닫기 처리 함수
    const handleClose = () => {
        if (isDoNotShowToday) {
            // 쿠키 설정: 1일 동안 유지
            Cookies.set('todayCookie', 'done', { expires: 1, path: '/' });
        }
        setIsVisible(false);
        document.body.classList.remove('banner-open');
    };

    // '오늘하루 열지 않기' 체크박스 클릭 시 처리
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsDoNotShowToday(checked);

        if (checked) {
            Cookies.set('todayCookie', 'done', { expires: 1, path: '/' });
            setIsVisible(false);
            document.body.classList.remove('banner-open');
        }
    };



    if (!isVisible) return null;

    return (
        <div className="top-banner-wrap">
            <div className="top-banner-box">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.top-banner-prev',
                        nextEl: '.top-banner-next',
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="top-banner-swiper"
                >
                    <SwiperSlide>
                        <div><a href="#none"><span>상단 배너 내용01 상단 배너 내용01 상단 배너 내용01 </span></a></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><a href="#none"><span>상단 배너 내용02 상단 배너 내용02 상단 배너 내용02 </span></a></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><a href="#none"><span>상단 배너 내용03 상단 배너 내용03 상단 배너 내용03 </span></a></div>
                    </SwiperSlide>
                </Swiper>
                <div className="control-wrap">
                    <button type="button" className="top-banner-prev">이전</button>
                    <button type="button" className="top-banner-next">다음</button>
                </div>
                <div className="banner-chk-box">
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="close-for-one-day"
                                name="close-for-one-day"
                                checked={isDoNotShowToday}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="close-for-one-day">오늘하루 열지 않기</label>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn-banner-close"
                                onClick={handleClose}
                                title="상단배너 닫기"
                            >
                                <span className="hide">닫기</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}