"use client";

import { useState } from "react";
import BoardCategory from "./(common)/BoardCategory";
import BoardSearch from "./(common)/BoardSearch";
import BoardPagination from "./(common)/BoardPagination";
import BoardButton from "./(common)/BoardButton";
import BoardCommonList from "./lists/BoardCommonList";
import BoardFaqList from "./lists/BoardFaqList";
import BoardImgList from "./lists/BoardImgList";
import { CategoryItem, SearchItem } from "@/app/types/board";

interface BoardListProps {
    boardListType: "common" | "faq" | "img";
    hasCategory?: boolean;                 
    hasSearch?: boolean;                   
    categories?: CategoryItem[];           
    searchOptions?: SearchItem[];         
}

export default function BoardList({
    boardListType,
    hasCategory = false,
    hasSearch = true,
    categories = [],
    searchOptions = [
        { id: "all", option: "전체" },
        { id: "title", option: "제목" },
        { id: "writer", option: "작성자" },
    ],
}: BoardListProps) {
    const [currentCategory, setCurrentCategory] = useState<string>("all");
    const [currentSearch, setCurrentSearch] = useState<string>("all");

    const handleSearchSubmit = () => {
        console.log("검색 실행! 현재 선택된 조건:", currentSearch);
    };

    const handleDelete = () => {
        console.log("게시글 삭제");
    };

    // UI 형태에 따른 리스트 렌더링
    const renderList = () => {
        switch (boardListType) {
            case "faq":
                return <BoardFaqList />;
            case "img":
                return <BoardImgList />;
            default:
                return <BoardCommonList />;
        }
    };

    return (
        <div className="content-box">
            {/* 카테고리*/}
            {hasCategory && categories.length > 0 && (
                <BoardCategory
                    categories={categories}
                    currentCategory={currentCategory}
                    onSelectCategory={(id) => setCurrentCategory(id)}
                />
            )}

            {/* 검색 */}
            {hasSearch && searchOptions.length > 0 && (
                <BoardSearch
                    searchCategory={searchOptions}
                    currentSearch={currentSearch}
                    onSelectSearch={(id) => setCurrentSearch(id)}
                    onSearch={handleSearchSubmit}
                />
            )}

            {/* 리스트 */}
            {renderList()}

            {/* 페이징 */}
            <BoardPagination />

            {/* 버튼 */}
            <BoardButton mode="list" align="right" onDelete={handleDelete} />
        </div>
    );
}