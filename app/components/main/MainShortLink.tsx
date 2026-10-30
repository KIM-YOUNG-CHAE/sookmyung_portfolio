import Link from "next/link";

export default function MainShortLink() {
    return (
        <div className="main-content-wrap main-content-wrap06">
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <div className="main-short-box">
                        <p className="short-txt">숙명여자대학교 디자인과 소개를 더 보고 싶다면?</p>
                        <Link className="btn-more black short-btn" href="#none">
                            <span>바로가기</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}