"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function BoardFaqList() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // 각 답변 DOM을 참조하기 위한 useRef 배열
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bn-list-faq">
            <div className="b-top-info-wrap">
                <div className="adm-chk">
                    <span className="chk-toggle">
                        <input id="adm-chk" type="checkbox" value="on" />
                    </span>
                    <label htmlFor="adm-chk">전체 선택/비선택</label>
                </div>
            </div>
            <div className="b-faq-list-wrap">
                <div className="b-faq-list-box">
                    <ul>
                        {/* 첫 번째 FAQ */}
                        <li className={activeIndex === 0 ? "active" : ""}>
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article01">게시글 선택</label>
                                <input type="checkbox" id="article01" value="" />
                            </span>
                            <div className="b-faq-item">
                                <a
                                    className="b-faq-question"
                                    href="#none"
                                    title={activeIndex === 0 ? "열림" : "닫힘"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleToggle(0);
                                    }}
                                >
                                    <span className="b-q-marker">Q</span>
                                    <span className="b-q-con">게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다.</span>
                                </a>
                                <div 
                                    className="b-faq-answer"
                                    ref={(el) => { answerRefs.current[0] = el; }}
                                    style={{
                                        maxHeight: activeIndex === 0 ? `${answerRefs.current[0]?.scrollHeight}px` : "0px"
                                    }}
                                >
                                    <div className="b-faq-answer-inner">
                                        <div className="b-a-con">게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다.</div>
                                    </div>
                                    <Link className="b-btn-modify" href="#none">수정</Link>
                                </div>
                            </div>
                        </li>

                        {/* 두 번째 FAQ */}
                        <li className={activeIndex === 1 ? "active" : ""}>
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article02">게시글 선택</label>
                                <input type="checkbox" id="article02" value="" />
                            </span>
                            <div className="b-faq-item">
                                <a
                                    className="b-faq-question"
                                    href="#none"
                                    title={activeIndex === 1 ? "열림" : "닫힘"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleToggle(1);
                                    }}
                                >
                                    <span className="b-q-marker">Q</span>
                                    <span className="b-q-con">게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다.</span>
                                </a>
                                <div 
                                    className="b-faq-answer"
                                    ref={(el) => { answerRefs.current[1] = el; }}
                                    style={{
                                        maxHeight: activeIndex === 1 ? `${answerRefs.current[1]?.scrollHeight}px` : "0px"
                                    }}
                                >
                                    <div className="b-faq-answer-inner">
                                        <div className="b-a-con">게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다.</div>
                                    </div>
                                    <Link className="b-btn-modify" href="#none">수정</Link>
                                </div>
                            </div>
                        </li>

                        {/* 세 번째 FAQ */}
                        <li className={activeIndex === 2 ? "active" : ""}>
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article03">게시글 선택</label>
                                <input type="checkbox" id="article03" value="" />
                            </span>
                            <div className="b-faq-item">
                                <a
                                    className="b-faq-question"
                                    href="#none"
                                    title={activeIndex === 2 ? "열림" : "닫힘"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleToggle(2);
                                    }}
                                >
                                    <span className="b-q-marker">Q</span>
                                    <span className="b-q-con">게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다. 게시물의 제목이 들어갑니다.</span>
                                </a>
                                <div 
                                    className="b-faq-answer"
                                    ref={(el) => { answerRefs.current[2] = el; }}
                                    style={{
                                        maxHeight: activeIndex === 2 ? `${answerRefs.current[2]?.scrollHeight}px` : "0px"
                                    }}
                                >
                                    <div className="b-faq-answer-inner">
                                        <div className="b-a-con">게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다. 게시물의 내용이 들어갑니다.</div>
                                    </div>
                                    <Link className="b-btn-modify" href="#none">수정</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}