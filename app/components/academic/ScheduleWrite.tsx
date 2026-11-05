"use client"

import BoardButton from "../community/(common)/BoardButton";

export default function ScheduleWrite() {
    return (
        <div className="bn-write-schedule">
            <form action="" method="">
                <fieldset>
                    <legend className="hide">학사일정 작성</legend>
                    <div className="b-sche-year-box">
                        <div className="b-title-box">
                            <label htmlFor="wr-year">년도 선택</label>
                            <span className="b-wr-required">*</span>
                        </div>
                        <div className="b-con-box">
                            <select className="b-select" id="wr-year" name="wr-type-name">
                                <option>선택</option><option>2026</option><option>2027</option><option>2028</option>
                            </select>
                        </div>
                    </div>
                    <div className="b-sche-month-box">
                        <p className="b-month-title">3월</p>
                        <div>
                            <div className="b-title-box">
                                <p>시작일~종료일</p>
                                <span className="b-wr-required">*</span>
                            </div>
                            <div className="b-con-box">
                                <div>
                                    <label className="hide" htmlFor="wr-sche-start-dt">공지시작일</label>
                                    <input type="text" id="wr-sche-start-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-start-dt-name"></input>
                                </div>
                                <span>~</span>
                                <div>
                                    <label className="hide" htmlFor="wr-sche-end-dt">공지종료일</label>
                                    <input type="text" id="wr-sche-end-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-end-dt-name"></input>
                                </div>
                                <div className="b-detail-box">
                                    <label htmlFor="wr-detail" className="hide">내용</label>
                                    <input type="text" className="b-input" id="wr-detail" name="wr-detail-name" placeholder="내용을 입력해주세요" />
                                </div>
                                <button className="b-sche-del" type="button">삭제</button>
                            </div>
                        </div>
                        <div>
                            <div className="b-title-box">
                                <p>시작일~종료일</p>
                                <span className="b-wr-required">*</span>
                            </div>
                            <div className="b-con-box">
                                <div>
                                    <label className="hide" htmlFor="wr-sche-start-dt">공지시작일</label>
                                    <input type="text" id="wr-sche-start-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-start-dt-name"></input>
                                </div>
                                <span>~</span>
                                <div>
                                    <label className="hide" htmlFor="wr-sche-end-dt">공지종료일</label>
                                    <input type="text" id="wr-sche-end-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-end-dt-name"></input>
                                </div>
                                <div className="b-detail-box">
                                    <label htmlFor="wr-detail" className="hide">내용</label>
                                    <input type="text" className="b-input" id="wr-detail" name="wr-detail-name" placeholder="내용을 입력해주세요" />
                                </div>
                                <button className="b-sche-del" type="button">삭제</button>
                            </div>
                        </div>
                        
                        <div className="b-sche-btn-box">
                            <span>
                                * 항목 추가 시, 추가 버튼을 눌러 주시기 바랍니다.
                            </span>
                            <a className="b-btn-add" href="#none" title="추가" onClick={(e) => e.preventDefault()}>추가</a>
                        </div>
                    </div>
                    <div className="b-sche-month-box">
                        <p className="b-month-title">4월</p>
                        <div>
                            <div className="b-title-box">
                                <p>시작일~종료일</p>
                                <span className="b-wr-required">*</span>
                            </div>

                            <div className="b-con-box">
                                <div>
                                    <label className="hide" htmlFor="wr-sche-start-dt">공지시작일</label>
                                    <input type="text" id="wr-sche-start-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-start-dt-name" ></input>
                                </div>

                                <span>~</span>
                                <div>
                                    <label className="hide" htmlFor="wr-sche-end-dt">공지종료일</label>
                                    <input type="text" id="wr-sche-end-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-end-dt-name" ></input>
                                </div>
                                <div className="b-detail-box">
                                    <label htmlFor="wr-detail" className="hide">내용</label>
                                    <input type="text" className="b-input" id="wr-detail" name="wr-detail-name" placeholder="내용을 입력해주세요" />
                                </div>
                                <button className="b-sche-del" type="button">삭제</button>
                            </div>
                        </div>
                        <div className="b-sche-btn-box">
                            <span>
                                * 항목 추가 시, 추가 버튼을 눌러 주시기 바랍니다.
                            </span>
                             <a className="b-btn-add" href="#none" title="추가" onClick={(e) => e.preventDefault()}>추가</a>
                        </div>
                    </div>
                    <div className="b-sche-month-box">
                        <p className="b-month-title">5월</p>
                        <div>
                            <div className="b-title-box">
                                <p>시작일~종료일</p>
                                <span className="b-wr-required">*</span>
                            </div>
                            <div className="b-con-box">
                                <div>
                                    <label className="hide" htmlFor="wr-sche-start-dt">공지시작일</label>
                                    <input type="text" id="wr-sche-start-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-start-dt-name"></input>
                                </div>

                                <span>~</span>
                                <div>
                                    <label className="hide" htmlFor="wr-sche-end-dt">공지종료일</label>
                                    <input type="text" id="wr-sche-end-dt" className="b-input datepicker" placeholder="YYYY-MM-DD" name="wr-sche-end-dt-name"></input>
                                </div>
                                <div className="b-detail-box">
                                    <label htmlFor="wr-detail" className="hide">내용</label>
                                    <input type="text" className="b-input" id="wr-detail" name="wr-detail-name" placeholder="내용을 입력해주세요" />
                                </div>
                                <button className="b-sche-del" type="button">삭제</button>
                            </div>
                        </div>
                        <div className="b-sche-btn-box">
                            <span>
                                * 항목 추가 시, 추가 버튼을 눌러 주시기 바랍니다.
                            </span>
                            <a className="b-btn-add" href="#none" title="추가" onClick={(e) => e.preventDefault()}>추가</a>
                        </div>
                    </div>
                </fieldset>
            </form>
            <BoardButton mode="write" align="center" />
        </div>
    );
}