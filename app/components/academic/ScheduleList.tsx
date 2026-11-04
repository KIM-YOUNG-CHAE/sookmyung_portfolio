import BoardButton from "../community/(common)/BoardButton";

export default function ScheduleList() {
    return (
        <div className="bn-list-schedule">
            <div className="b-schedule-month-box">
                <ul>
                    <li className="b-schedule-year">
                        <button type="button" className="b-cal-prev-button" title="이전 연도 보기"><span>이전 연도 보기</span></button>
                        <p><span>2026</span></p>
                        <button type="button" className="b-cal-next-button" title="다음 연도 보기"><span>다음 연도 보기</span></button>
                    </li>
                    <li><a href="#year2026-month3" data-year="26" data-month="3" title="탭" className="tab-month-item">3월</a></li>
                    <li><a href="#year2026-month4" data-year="26" data-month="4" title="탭" className="tab-month-item">4월</a></li>
                    <li><a href="#year2026-month5" data-year="26" data-month="5" title="탭" className="tab-month-item">5월</a></li>
                    <li><a href="#year2026-month6" data-year="26" data-month="6" title="탭" className="tab-month-item">6월</a></li>
                    <li><a href="#year2026-month7" data-year="26" data-month="7" title="탭" className="tab-month-item">7월</a></li>
                    <li><a href="#year2026-month8" data-year="26" data-month="8" title="탭" className="tab-month-item">8월</a></li>
                    <li><a href="#year2026-month9" data-year="26" data-month="9" title="탭" className="tab-month-item">9월</a></li>
                    <li><a href="#year2026-month10" data-year="26" data-month="10" title="탭" className="tab-month-item">10월</a></li>
                    <li className="active"><a href="#year2026-month11" data-year="26" data-month="11" title="탭" className="tab-month-item">11월</a></li>
                    <li><a href="#year2026-month12" data-year="26" data-month="12" title="탭" className="tab-month-item">12월</a></li>
                    <li><a href="#year2027-month1" data-year="27" data-month="1" title="탭" className="tab-month-item">27.1월</a></li>
                    <li><a href="#year2027-month2" data-year="27" data-month="2" title="탭" className="tab-month-item">27.2월</a></li>
                </ul>
            </div>
            <div className="b-schedule-list-box">
                {/* 3월 */}
                <div id="year2026-month3">
                    <p>3월</p>
                    <div>
                        <div>
                            <p>03(화)</p>
                            <ul>
                                <li>[학교일정] 1학기 개강 및 입학식</li>
                            </ul>
                        </div>
                        <div>
                            <p>16(월)</p>
                            <ul>
                                <li>[학교일정] 수강신청 확인 및 변경 기간</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4월 */}
                <div id="year2026-month4">
                    <p>4월</p>
                    <div>
                        <div>
                            <p>15(수)</p>
                            <ul>
                                <li>[학교일정] 1학기 중간고사</li>
                            </ul>
                        </div>
                        <div>
                            <p>27(월)</p>
                            <ul>
                                <li>[학교일정] 소멸과목 성적포기 (개강 후 4주차)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 5월 */}
                <div id="year2026-month5">
                    <p>5월</p>
                    <div>
                        <div>
                            <p>05(화)</p>
                            <ul>
                                <li>[학교일정] 어린이날 휴강</li>
                            </ul>
                        </div>
                        <div>
                            <p>18(월)</p>
                            <ul>
                                <li>[학교일정] 개교기념일 행사</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 6월 */}
                <div id="year2026-month6">
                    <p>6월</p>
                    <div>
                        <div>
                            <p>15(월)</p>
                            <ul>
                                <li>[학교일정] 1학기 기말고사</li>
                            </ul>
                        </div>
                        <div>
                            <p>22(월)</p>
                            <ul>
                                <li>[학교일정] 1학기 성적 입력 및 정정 기간</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 7월 */}
                <div id="year2026-month7">
                    <p>7월</p>
                    <div>
                        <div>
                            <p>01(수)</p>
                            <ul>
                                <li>[학교일정] 하계 계절학기 시작</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 8월 */}
                <div id="year2026-month8">
                    <p>8월</p>
                    <div>
                        <div>
                            <p>03(월)</p>
                            <ul>
                                <li>[학교일정] 2학기 수강신청 (학년별 실시)</li>
                            </ul>
                        </div>
                        <div>
                            <p>21(금)</p>
                            <ul>
                                <li>[학교일정] 후기 학위수여식</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 9월 */}
                <div id="year2026-month9">
                    <p>9월</p>
                    <div>
                        <div>
                            <p>01(화)</p>
                            <ul>
                                <li>[학교일정] 2학기 개강</li>
                            </ul>
                        </div>
                        <div>
                            <p>14(월)</p>
                            <ul>
                                <li>[학교일정] 2학기 휴학신청 : 휴학 시 등록금 5/6 반환</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 10월 */}
                <div id="year2026-month10">
                    <p>10월</p>
                    <div>
                        <div>
                            <p>09(금)</p>
                            <ul>
                                <li>[학교일정] 한글날 휴강</li>
                            </ul>
                        </div>
                        <div>
                            <p>20(화)</p>
                            <ul>
                                <li>[학교일정] 2학기 중간고사</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 11월 */}
                <div id="year2026-month11" className="active">
                    <p>11월</p>
                    <div>
                        <div>
                            <p>02(월)</p>
                            <ul>
                                <li>[학교일정] 2학기 세부성적 입력</li>
                            </ul>
                        </div>
                        <div>
                            <p>16(월)</p>
                            <ul>
                                <li>[학교일정] 2027학년도 전과지원 신청기간 (숙명포털시스템)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 12월 */}
                <div id="year2026-month12">
                    <p>12월</p>
                    <div>
                        <div>
                            <p>21(월)</p>
                            <ul>
                                <li>[학교일정] 2학기 기말고사</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 27년 1월 */}
                <div id="year2027-month1">
                    <p>2027년 / 1월</p>
                    <div>
                        <div>
                            <p>04(월)</p>
                            <ul>
                                <li>[학교일정] 동계 계절학기 개강</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 27년 2월 */}
                <div id="year2027-month2">
                    <p>2027년 / 2월</p>
                    <div>
                        <div>
                            <p>-</p>
                            <ul>
                                <li>일정없음</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <BoardButton mode="list" align="right" />
        </div>
    );
}