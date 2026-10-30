import BoardList from "@/app/components/community/BoardList";
import { DEFAULT_SEARCH_TYPE, NEWS_CATEGORIES } from "@/app/constants/board";

export default function page() {
    return (
        <BoardList 
            boardListType="img"
            hasCategory={true}
            hasSearch={true}
            categories={NEWS_CATEGORIES}
            searchOptions={DEFAULT_SEARCH_TYPE}
        />
    );
}