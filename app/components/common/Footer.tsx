'use client';
import { useRelatedBox } from "@/app/hooks/useRelatedBox"

export default function Footer() {
    const { isOpen, wrapRef, toggle, handleKeyDown } = useRelatedBox();
    return (
        <footer className="footer-wrap">
            <div className="footer-box">
                <div className="footer-top">
                    <ul>
                        <li><a href="#none" title="바로가기" className="privarc">개인정보처리방침</a></li>
                    </ul>
                    <div className="related-site-wrap" ref={wrapRef}>
                        <a
                            className={`related-site-title ${isOpen ? 'active' : ''}`}
                            href="#none"
                            title={`관련사이트 ${isOpen ? '열림' : '닫힘'}`}
                            role="button"
                            onClick={toggle}
                            onKeyDown={handleKeyDown}
                        >
                            <span>관련사이트</span>
                        </a>

                        <div
                            className="related-site-box"
                            style={{ display: isOpen ? 'block' : 'none' }}
                        >
                            <ul className="related-site">
                                <li>
                                    <a
                                        href="https://www.sookmyung.ac.kr/kr/index.do"
                                        title="새창열기"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        숙명여자대학교
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://120th.sookmyung.ac.kr/SMU-120th/index.do"
                                        title="새창열기"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        숙명창학120주년
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-sns-box">
                        <ul>
                            <li><a className="facebook" href="https://www.facebook.com/SookmyungUniversity" target="_blank" title="새창열기"><span className="hide">페이스북</span></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/SookmyungUniv" target="_blank" title="새창열기"><span className="hide">유튜브</span></a></li>
                            <li><a className="insta" href="https://instagram.com/sookmyung_womens_univ" target="_blank" title="새창열기"><span className="hide">인스타그램</span></a></li>
                            <li><a className="blog" href="https://blog.naver.com/iamsookmyung" target="_blank" title="새창열기"><span className="hide">블로그</span></a></li>
                        </ul>
                    </div>
                    <div className="footer-info-box">
                        <address>
                            <ul>
                                <li>04310 서울특별시 용산구 청파로47길 100(청파동2가)</li>
                                <li>TEL. <a href="tel:02-2077-7263" title="전화걸기">02-2077-7263</a></li>
                                <li>FAX. 02-710-7800</li>
                                <li>E-MAIL: <a href="mailto:smgrad@sookmyung.ac.kr" title="메일전송">smgrad@sookmyung.ac.kr</a></li>
                            </ul>
                        </address>
                    </div>
                </div>
            </div>
        </footer >
    );
}