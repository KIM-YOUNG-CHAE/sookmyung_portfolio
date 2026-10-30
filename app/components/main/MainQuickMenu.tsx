import Image from "next/image"

export default function MainQuickMenu() {
    return (
        <div className="main-content-wrap main-content-wrap01">
            <div className="main-content-box01">
                <div className="main-mini-wrap">
                    <div className="main-quick-box">
                        <h3 className="quick-title">
                            QUICK MENU
                        </h3>
                        <ul>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick01@2x.png" alt="" />
                                    <span>숙명G메일</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick02@2x.png" alt="" />
                                    <span>숙명포털</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick03@2x.png" alt="" />
                                    <span>SnowBoard<br />(학습관리)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick04@2x.png" alt="" />
                                    <span>SNOWAY<br />(경력개발)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick05@2x.png" alt="" />
                                    <span>중앙도서관</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick06@2x.png" alt="" />
                                    <span>전화번호 검색</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick07@2x.png" alt="" />
                                    <span>비교과시스템<br />(특강/마일리지)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="새창열기" target="_blank">
                                    <img src="/assets/images/main/ico-main-quick08@2x.png" alt="" />
                                    <span>증명서발급</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}