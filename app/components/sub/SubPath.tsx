"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEM } from "@/app/constants/navigation";

export default function SubPath() {
    const pathname = usePathname();
    const [openDepth1, setOpenDepth1] = useState(false);
    const [openDepth2, setOpenDepth2] = useState(false);

    const matchedDepth1 = NAV_ITEM.find((item) =>
        item.subMenus?.some((sub) => sub?.path === pathname)
    ) || NAV_ITEM[0];

    const matchedDepth2 = matchedDepth1?.subMenus?.find(
        (sub) => sub?.path === pathname
    ) || matchedDepth1?.subMenus?.[0];

    const toggleDepth1 = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDepth1((prev) => !prev);
    };

    const toggleDepth2 = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDepth2((prev) => !prev);
    };

    return (
        <div className="path-box">
            <div className="path">
                <Link href={"/"} className="path-home">
                    <span className="hide">홈 바로가기</span>
                </Link>
                <div className="path-con">
                    <ul>
                        <li className={openDepth1 ? "active" : ""}>
                            <a
                                href="#none"
                                className="path-selected"
                                onClick={toggleDepth1}
                            >
                                <span>{matchedDepth1.title}</span>
                            </a>
                            <ul className={`path-depth path-depth01 ${openDepth1 ? "active" : ""}`}>
                                {NAV_ITEM.map((item) => {
                                    const isCurrent = item.title === matchedDepth1.title;
                                    return (
                                        <li key={item.title} className={isCurrent ? "active" : ""}>
                                            <Link
                                                href={item.path || item.subMenus?.[0]?.path || "#none"}
                                                onClick={() => setOpenDepth1(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        <li className={openDepth2 ? "active" : ""}>
                            <a
                                href="#none"
                                className="path-selected"
                                onClick={toggleDepth2}
                            >
                                <span>{matchedDepth2?.title}</span>
                            </a>
                            <ul className={`path-depth path-depth02 ${openDepth2 ? "active" : ""}`}>
                                {matchedDepth1.subMenus?.map((sub) => {
                                    const isCurrent = sub.path === pathname;
                                    return (
                                        <li key={sub.path} className={isCurrent ? "active" : ""}>
                                            <Link
                                                href={sub.path}
                                                onClick={() => setOpenDepth2(false)}
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>

                    <div className="info">
                        <ul>
                            <li className="share">
                                <a
                                    href="#none"
                                    id="url-copy"
                                    title="링크복사"
                                    onClick={(e) => {
                                        e.preventDefault(); // 기본 링크 이동/점프 방지
                                        const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
                                        navigator.clipboard.writeText(currentUrl)
                                            .then(() => {
                                                alert("링크복사가 완료되었습니다!");
                                            })
                                            .catch((err) => {
                                                console.error("링크 복사 실패:", err);
                                                alert("링크 복사에 실패했습니다.");
                                            });
                                    }}
                                >
                                    <span className="hide">공유</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}