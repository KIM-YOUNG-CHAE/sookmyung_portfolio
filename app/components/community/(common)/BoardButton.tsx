"use client";

import Link from "next/link";

interface BoardButtonProps {
    mode: "list" | "detail" | "write";
    align?: "left" | "center" | "right";
    onDelete?: () => void;
}

export default function BoardButton({ mode, align = "right", onDelete }: BoardButtonProps) {
    return (
        <div className={`b-btn-wrap ${align}`}>
            {/* 목록 화면일 때 */}
            {mode === "list" && (
                <>
                    <button type="button" className="b-btn" onClick={onDelete}>삭제</button>
                    <Link href="/board/write" className="b-btn blue">글쓰기</Link>
                </>
            )}

            {/* 상세 화면일 때 */}
            {mode === "detail" && (
                <>
                    <Link href="/board" className="b-btn blue">목록</Link>
                    <Link href="/board/edit" className="b-btn">수정</Link>
                    <button type="button" className="b-btn" onClick={onDelete}>삭제</button>
                </>
            )}

            {/* 작성 화면일 때 */}
            {mode === "write" && (
                <>
                    <Link href="/board" className="b-btn">취소</Link>
                    <button type="submit" className="b-btn blue">등록</button>
                </>
            )}
        </div>
    );
}