import Link from "next/link";

export default function BoardCommonList() {
    return (
        <div className="bn-list-common">
            <div className="b-top-info-wrap">
                <div className="adm-chk">
                    <span className="chk-toggle">
                        <input id="adm-chk" type="checkbox" value="on" />
                    </span>
                    <label htmlFor="adm-chk">전체 선택/비선택</label>
                </div>
            </div>
            <table>
                <caption className="hide">일반게시판(기본형)</caption>
                <colgroup>
                    <col className="b-col8" />
                    <col className="b-col-auto" />
                    <col className="b-col12" />
                    <col className="b-col12" />
                    <col className="b-col8" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">등록일</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="b-top-box">
                        <td className="b-num-box"><span className="b-notice">공지</span></td>
                        <td className="b-td-title">
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article01">게시글 선택</label>
                                <input type="checkbox" id="article01" value="" />
                            </span>
                            <div className="b-title-box">
                                <Link href="#none" title="자세히 보기">
                                    <span className="b-title">일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다.</span>
                                </Link>
                                <div className="b-etc-box">
                                    <p className="b-new"><span>N</span></p>
                                </div>
                                <div className="b-m-con">
                                    <span className="b-notice">공지</span>
                                    <span className="b-writer">관리자</span>
                                    <span className="b-date">2021-07.05</span>
                                    <span className="b-hit">300</span>
                                </div>
                            </div>
                        </td>
                        <td>관리자</td>
                        <td>2021.07.05</td>
                        <td>300</td>
                    </tr>
                    <tr className="b-top-box">
                        <td className="b-num-box"><span>3</span></td>
                        <td className="b-td-title">
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article01">게시글 선택</label>
                                <input type="checkbox" id="article01" value="" />
                            </span>
                            <div className="b-title-box">
                                <Link href="#none" title="자세히 보기">
                                    <span className="b-title">일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다.</span>
                                </Link>
                                <div className="b-etc-box">
                                    <p className="b-new"><span>N</span></p>
                                </div>
                                <div className="b-m-con">
                                    <span className="b-writer">관리자</span>
                                    <span className="b-date">2021-07.05</span>
                                    <span className="b-hit">300</span>
                                </div>
                            </div>
                        </td>
                        <td>관리자</td>
                        <td>2021.07.05</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td className="b-num-box"><span>2</span></td>
                        <td className="b-td-title">
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article02">게시글 선택</label>
                                <input type="checkbox" id="article02" value="" />
                            </span>
                            <div className="b-title-box">
                                <Link href="#none" title="자세히 보기">
                                    <span className="b-title">일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다.</span>
                                </Link>
                                <div className="b-etc-box">
                                </div>
                                <div className="b-m-con">
                                    <span className="b-writer">관리자</span>
                                    <span className="b-date">2021-07.05</span>
                                    <span className="b-hit">300</span>
                                </div>
                            </div>
                        </td>
                        <td>관리자</td>
                        <td>2021.07.05</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td className="b-num-box"><span>1</span></td>
                        <td className="b-td-title">
                            <span className="article-chk" data-aritlce-no="">
                                <label className="hide" htmlFor="article02">게시글 선택</label>
                                <input type="checkbox" id="article02" value="" />
                            </span>
                            <div className="b-title-box">
                                <Link href="#none" title="자세히 보기">
                                    <span className="b-title">일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다. 일반 게시판 게시글 영역입니다.</span>
                                </Link>
                                <div className="b-etc-box">
                                </div>
                                <div className="b-m-con">
                                    <span className="b-writer">관리자</span>
                                    <span className="b-date">2021-07.05</span>
                                    <span className="b-hit">300</span>
                                </div>
                            </div>
                        </td>
                        <td>관리자</td>
                        <td>2021.07.05</td>
                        <td>300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}