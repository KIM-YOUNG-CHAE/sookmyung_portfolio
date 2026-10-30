import { CategoryItem, SearchItem } from "../types/board";

// 뉴스 카테고리
export const NEWS_CATEGORIES: CategoryItem[] = [
    { id: "all", label: "전체" },
    { id: "news", label: "NEWS" },
    { id: "people", label: "PEOPLE" },
    { id: "research", label: "RESEARCH" },
];

// 기본 검색 조건
export const DEFAULT_SEARCH_TYPE: SearchItem[] = [
    { id: "all", option: "전체" },
    { id: "title", option: "제목" },
    { id: "writer", option: "작성자" }
];