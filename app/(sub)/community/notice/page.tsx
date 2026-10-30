import BoardList from "@/app/components/community/BoardList";
import { DEFAULT_SEARCH_TYPE } from "@/app/constants/board";

export default function page() {
    return (
        <BoardList
            boardListType="common"              
            hasCategory={false}               
            hasSearch={true}                 
            searchOptions={DEFAULT_SEARCH_TYPE}
        />
    );
}