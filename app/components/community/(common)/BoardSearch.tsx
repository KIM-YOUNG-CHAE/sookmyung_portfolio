import { BoardSearchProps } from "@/app/types/board";

export default function BoardSearch({
    searchCategory,
    currentSearch,
    onSelectSearch,
    onSearch,
}: BoardSearchProps) {
    return (
        <div className="b-search">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}>
                <fieldset className="b-search-wrap">
                    <legend className="hide">게시글 검색</legend>
                    <div className="b-sel-box b-cate-basic">
                        <label className="b-sel-label" htmlFor="sch-cate02"><span className="hide">카테고리 선택</span></label>
                        <select id="sch-cate02" name="sch-cate02" value={currentSearch} onChange={(e) => onSelectSearch(e.target.value)}>
                            {searchCategory.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="b-search-box">
                        <label className="b-sel-label" htmlFor="search-val"><span className="hide">검색어</span></label>
                        <input type="text" id="search-val" name="srSearchVal" placeholder="검색어를 입력하세요." />
                        <button className="b-sel-btn" type="submit">검색</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}