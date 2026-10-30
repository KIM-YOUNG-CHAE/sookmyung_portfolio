"use client"

import Link from "next/link";
import BoardButton from "./(common)/BoardButton";

interface BoardDetailProps {
    id: string;
}

export default function BoardDetail({ id }: BoardDetailProps) {

    const handleDelete = () => {
        console.log("게시글 삭제");
    };

    return (
        <div className="content-box">
            <div className="bn-view-common">
                <div className="b-main-box">
                    <div className="b-top-box">
                        <div className="b-title-box">
                            <span className="b-title">2026-2학기 졸업논문 지도교수 배정 및 일정 공지</span>
                            <span className="b-new">N</span>
                        </div>
                        <div className="b-etc-box">
                            <ul>
                                <li className="b-date-box">
                                    <span>작성일</span>
                                    <span>2026-10-22</span>
                                </li>
                                <li className="b-hit-box">
                                    <span>조회수</span>
                                    <span>34</span>
                                </li>
                                <li className="b-writer-box">
                                    <span>작성자</span>
                                    <span>역사문화학과</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="b-info-box">
                        <div className="b-file-box">
                            <ul>
                                <li>
                                    <a className="b-file-dwn" href="#none" title="첨부파일 다운로드">
                                        붙임 1. 2026-2 졸업논문 지도교수 배정(게시용).xlsx
                                    </a>
                                </li>

                                <li>
                                    <a className="b-file-dwn" href="#none" title="첨부파일 다운로드">
                                        붙임 2. 학부 논문 표지 양식.hwp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="b-content-box">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere sed nunc sit amet finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam fringilla mi in ante posuere, sit amet tincidunt libero consequat. Donec ut felis non lorem cursus faucibus. Quisque iaculis ipsum enim, non auctor leo dignissim eu. Nunc imperdiet vehicula neque. Integer maximus sollicitudin viverra. Nullam ut lectus nec neque luctus posuere eget id risus. Duis varius sollicitudin leo. Maecenas auctor vehicula tristique. Nulla pulvinar turpis ac ligula tincidunt dapibus. Etiam augue metus, aliquam vulputate hendrerit ac, tempor ac ante. Curabitur pellentesque tellus nec velit convallis faucibus.
                        </p>
                        <br />
                        <br />
                        <pre>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere sed nunc sit amet finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam fringilla mi in ante posuere, sit amet tincidunt libero consequat. Donec ut felis non lorem cursus faucibus. Quisque iaculis ipsum enim, non auctor leo dignissim eu. Nunc imperdiet vehicula neque. Integer maximus sollicitudin viverra. Nullam ut lectus nec neque luctus posuere eget id risus. Duis varius sollicitudin leo. Maecenas auctor vehicula tristique. Nulla pulvinar turpis ac ligula tincidunt dapibus. Etiam augue metus, aliquam vulputate hendrerit ac, tempor ac ante. Curabitur pellentesque tellus nec velit convallis faucibus.
                        </pre>
                    </div>
                </div>
                <div className="b-pager-box">
                    <div>
                        <p>이전글</p>
                        <p>
                            <Link href="#none" title="이전글보기">
                                이전글 타이틀 이전글 타이틀 이전글 타이틀
                            </Link>
                        </p>
                    </div>
                    <div>
                        <p>다음글</p>
                        <p>
                            <Link href="#none" title="다음글보기">
                                다음글 타이틀 다음글 타이틀 다음글 타이틀
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <BoardButton mode="detail" align="right" onDelete={handleDelete} />
        </div>
    );
}