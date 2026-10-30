"use client"
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainCalendar() {

    const todayDate = new Date().getDate();

    return (
        <div className="main-content-wrap main-content-wrap02">
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <div className="main-schedule-box">
                        <div className="main-title-box">
                            <h3 className="main-title">학사일정</h3>
                            <div className="month-box mobile-hide">
                                <button className="btn-sche-prev month-prev" type="button" title="이전 버튼"><span className="hide">이전 월</span></button>
                                <ul className="month-list">
                                    <li><a href="#none" className="prevMonth">9월</a></li>
                                    <li className="active"><a href="#none" className="month">10월</a></li>
                                    <li><a href="#none" className="nextMonth">11월</a></li>
                                </ul>
                                <button className="btn-sche-next month-next" type="button" title="다음 버튼"><span className="hide">다음 월</span></button>
                            </div>
                            <div className="m-month-box pc-hide">
                                <div className="m-month-box pc-hide">
                                    <label className="hide" htmlFor="main_month">월 선택</label>
                                    <select id="main_month">
                                        <option value="1">1월</option>
                                        <option value="2">2월</option>
                                        <option value="3">3월</option>
                                        <option value="4">4월</option>
                                        <option value="5">5월</option>
                                        <option value="6">6월</option>
                                        <option value="7">7월</option>
                                        <option value="8">8월</option>
                                        <option value="9">9월</option>
                                        <option value="10">10월</option>
                                        <option value="11">11월</option>
                                        <option value="12">12월</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mini-calendar-box">
                            <div className="mini-date-box">
                                <Swiper
                                    modules={[Navigation]}
                                    slidesPerView={"auto"}
                                    navigation={{
                                        prevEl: '.btn-date-prev',
                                        nextEl: '.btn-date-next',
                                    }}
                                    className="mini-date-swiper"
                                >
                                    {Array.from({ length: 31 }, (_, i) => {
                                        const dayNumber = i + 1; 
                                        const dayString = String(dayNumber).padStart(2, '0'); 

                                        const isToday = dayNumber === todayDate;

                                        return (
                                            <SwiperSlide key={dayString}>
                                                <a
                                                    className={`mini-date ${isToday ? 'today' : ''}`}
                                                    href="#none"
                                                >
                                                    {dayString}
                                                </a>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                                <div className="control-wrap">
                                    <button className="btn-date-prev" type="button">이전</button>
                                    <button className="btn-date-next" type="button">다음</button>
                                </div>
                            </div>
                            <div className="mini-sche-box">
                                <Swiper
                                    slidesPerView={"auto"}
                                    observeParents={true}
                                    observer={true}
                                    breakpoints={{
                                        0: {
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
                                    className="mini-sche-swiper"
                                >
                                    <SwiperSlide>
                                        <a href="#none" className="sche-con-box">
                                            <p className="mini-period">10.01</p>
                                            <p className="mini-title">2학기 세부성적 입력 기간</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="#none" className="sche-con-box">
                                            <p className="mini-period">10.01 - 10.30</p>
                                            <p className="mini-title">2학기 세부성적 입력 기간</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="#none" className="sche-con-box">
                                            <p className="mini-period">10.02 - 10.10</p>
                                            <p className="mini-title">디자인대 컨퍼런스</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="#none" className="sche-con-box">
                                            <p className="mini-period">10.10 - 10.20</p>
                                            <p className="mini-title">테스트테스트</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="#none" className="sche-con-box">
                                            <p className="mini-period">10.12 - 10.15</p>
                                            <p className="mini-title">12341234</p>
                                        </a>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                        <Link className="btn-more" href="#none">VIEW MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}