"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

export default function MainNotice() {
    return (
        <div className="main-content-wrap main-content-wrap03">
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <h3 className="main-title">공지사항</h3>
                    <div className="main-notice-box">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: '.main-notice-prev',
                                nextEl: '.main-notice-next',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 16,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            className="main-notice-swiper"
                        >
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">장학선발</p>
                                    <p className="mini-title">2024학년도 학부 공모전 장학생 선발</p>
                                    <p className="mini-date">2024.12.02</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">교적</p>
                                    <p className="mini-title">2025년 2월 졸업신청자 교원자격무시험검정원서 제출 안내</p>
                                    <p className="mini-date">2024.05.22</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">졸업시험</p>
                                    <p className="mini-title">2024-2학기 졸업시험 본시험 결과 및 1차 재시험 안내</p>
                                    <p className="mini-date">2024.12.02</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">졸업필수요건</p>
                                    <p className="mini-title">2024학년도 2학기 재학생(학부-대학원) 대상 온라인 폭력예방교육 실시 안내</p>
                                    <p className="mini-date">2024.12.02</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">장학선발</p>
                                    <p className="mini-title">2024학년도 학부 공모전 장학생 선발</p>
                                    <p className="mini-date">2024.12.02</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className="notice-con-box" href="#none">
                                    <p className="mini-cate">교적</p>
                                    <p className="mini-title">2025년 2월 졸업신청자 교원자격무시험검정원서 제출 안내</p>
                                    <p className="mini-date">2024.05.22</p>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        <div className="control-wrap">
                            <button className="main-notice-prev" type="button">
                                이전
                            </button>
                            <button className="main-notice-next" type="button">
                               다음
                            </button>
                        </div>
                    </div>



                    <Link className="btn-more white" href="#none">VIEW MORE</Link>
                </div>
            </div>
        </div>
    );
}