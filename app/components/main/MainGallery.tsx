"use client"
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 임시 더미데이터
const newsItems = [
    { id: 1, imgNum: "01" },
    { id: 2, imgNum: "02" },
    { id: 3, imgNum: "03" },
    { id: 4, imgNum: "04" },
    { id: 5, imgNum: "01" },
    { id: 6, imgNum: "02" },
    { id: 7, imgNum: "03" },
    { id: 8, imgNum: "04" },
];

export default function MainGallery() {
    return (
        <div className="main-content-wrap main-content-wrap05">
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <div className="main-gallery-box">
                        <div className="main-title-box">
                            <h3 className="main-title">
                                포토갤러리
                            </h3>
                            <div className="control-wrap">
                                <button className="btn-gallery-prev" type="button">
                                    이전
                                </button>
                                <button className="btn-gallery-next" type="button">
                                    다음
                                </button>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: '.btn-gallery-prev',
                                nextEl: '.btn-gallery-next',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 16,
                                    slidesPerGroup: 1,
                                },

                                1024: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 16,
                                    slidesPerGroup: 1,
                                },
                                1280: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    slidesPerGroup: 2,
                                },
                            }}
                            className="main-gallery-swiper"
                        >
                            {newsItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link className="gallery-con-box" href="#none">
                                        <div className="gallery-img-box img-ratio">
                                            <img src={`/assets/images/main/img-news${item.imgNum}.jpg`} alt="" />
                                        </div>
                                        <div className="gallery-txt-box">
                                            <p className="mini-title">
                                                Doloremque perferendis dolore officia eligendi reprehenderit quo veritatis
                                            </p>
                                            <p className="mini-date">
                                                2025.01.23
                                            </p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Link className="btn-more white" href="#none">VIEW MORE</Link>
                </div>
                <div className="marquee-wrap">
                    <div className="marquee-box">
                        <p>SOOKMYUNG WOMEN’S UNIVERSITY DIVISION OF LAW</p>
                    </div>
                    <div className="marquee-box">
                        <p>SOOKMYUNG WOMEN’S UNIVERSITY DIVISION OF LAW</p>
                    </div>
                </div>
            </div>
        </div>

    );
}