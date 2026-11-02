import BoardButton from "./(common)/BoardButton";

export default function BoardWrite() {
    return (
        <div className="bn-write-common">
            <form action="" method="">
                <fieldset>
                    <legend className="hide">게시판 작성</legend>
                    <div className="b-table-outer">
                        <div className="b-table-wrap">

                            {/* 공지여부 체크 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-notice-start-dt">공지여부</label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con b-period-con">
                                            <div className="b-chk-box">
                                                <input type="checkbox" id="topNoticeYn" name="wr-notice-name" className="b-chk" value="on" />
                                                <label htmlFor="topNoticeYn">상단 공지</label>
                                            </div>
                                            <div>
                                                <input type="text" id="wr-notice-start-dt" name="wr-notice-start-dt-name" className="b-input datepicker" placeholder="0000-00-00" defaultValue="" />
                                            </div>
                                            <span>~</span>
                                            <div>
                                                <label className="hide" htmlFor="wr-notice-end-dt">공지종료일</label>
                                                <input type="text" id="wr-notice-end-dt" name="wr-notice-end-dt-name" className="b-input datepicker" placeholder="0000-00-00" defaultValue="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 제목 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-title">제목</label>
                                        <span className="b-wr-required">*</span>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <input
                                                type="text"
                                                className="b-input"
                                                id="wr-title"
                                                name="wr-title-name"
                                                placeholder="제목을 입력해주세요"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*작성자 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-name">작성자<span className="b-wr-required">*</span></label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <input
                                                type="text"
                                                className="b-input"
                                                id="wr-name"
                                                name="wr-name-name"
                                                placeholder="작성자명을 입력해주세요"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 유형 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-type">유형</label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <select className="b-select" id="wr-type" name="wr-type-name" defaultValue="유형을 선택해주세요">
                                                <option >전체</option>
                                                <option>NEWS</option>
                                                <option>PEOPLE</option>
                                                <option>RESEARCH</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 내용 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-con">내용<span className="b-wr-required">*</span></label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <textarea
                                                className="b-input b-textarea"
                                                id="wr-con"
                                                name="wr-con-name"
                                                defaultValue=""
                                            ></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* 첨부파일 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-file">첨부파일</label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <input
                                                type="text"
                                                className="b-input"
                                                id="wr-file"
                                                name="wr-file-name"
                                                placeholder="첨부파일을 업로드해주세요"
                                                defaultValue=""
                                            />
                                            <button className="b-file-btn" title="파일첨부" type="button">
                                                <span>파일선택</span>
                                            </button>
                                        </div>
                                        <div className="b-file-box">
                                            <ul>
                                                <li>
                                                    <a href="#none" title="다운로드">첨부파일1.png</a>
                                                    <a className="b-file-del-btn" href="#none" title="삭제"><span>삭제</span></a>
                                                </li>
                                                <li>
                                                    <a href="#none" title="다운로드">첨부파일2.jpg</a>
                                                    <a className="b-file-del-btn" href="#none" title="삭제"><span>삭제</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 썸네일 */}
                            <div className="b-table-box">
                                <div className="b-row-box">
                                    <div className="b-title-box">
                                        <label htmlFor="wr-thumb">썸네일</label>
                                    </div>
                                    <div className="b-con-box">
                                        <div className="b-con">
                                            <input
                                                type="text"
                                                className="b-input"
                                                id="wr-thumb"
                                                name="wr-thumb-name"
                                                placeholder="썸네일을 업로드해주세요"
                                                defaultValue=""
                                            />
                                            <button className="b-file-btn" title="파일첨부" type="button">
                                                <span>파일선택</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </form>
            <BoardButton mode="write" align="center" />
        </div>
    );
}