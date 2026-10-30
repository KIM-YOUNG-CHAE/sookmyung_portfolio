"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import imgMainVi01 from "@/public/assets/images/main/img-main-vi01.jpg";
import imgMainVi02 from "@/public/assets/images/main/img-main-vi02.jpg";


export default function MainVisual() {
    const progressFillRef = useRef<HTMLSpanElement>(null);

    const handleAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressFillRef.current) {
            progressFillRef.current.style.width = `${(1 - progress) * 100}%`;
        }
    };

    return (
        <div className="main-visual-wrap">
            <div className="main-visual-box">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.main-vi-prev',
                        nextEl: '.main-vi-next',
                    }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onAutoplayTimeLeft={handleAutoplayTimeLeft}
                    className="main-visual-swiper"
                >
                    <SwiperSlide>
                        <div className="visual-img-box">
                            <Image src={imgMainVi01} alt="" priority />
                        </div>
                        <div className="visual-txt-box">
                            <p className="txt01">SOOKMYUNG WOMEN’S UNIVERSITY</p>
                            <p className="txt02">DEPARTMENT OF<br />VISUAL & MEDIA DESIGN</p>
                            <p className="txt03">마음과 시대에 소통하는 디자이너</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="visual-img-box">
                            <Image src={imgMainVi02} alt="" priority />
                        </div>
                        <div className="visual-txt-box">
                            <p className="txt01">SOOKMYUNG WOMEN’S UNIVERSITY</p>
                            <p className="txt02">DEPARTMENT OF<br />VISUAL & MEDIA DESIGN</p>
                            <p className="txt03">마음과 시대에 소통하는 디자이너</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="control-wrap">
                    <div className="control-box">
                        <div className="main-vi-progress-bar">
                            <span ref={progressFillRef} className="progress-fill"></span>
                        </div>
                        <div className="control-button-wrap">
                            <button className="main-vi-prev" type="button">이전</button>
                            <button className="main-vi-next" type="button">다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}