import { BoardCategoryProps } from "../../../types/board"


export default function BoardCategory({
    categories,
    currentCategory,
    onSelectCategory,
}: BoardCategoryProps) {
    return (
        <div className="b-category">
            <div className="b-category-box mobile-hide">
                <ul>
                    {categories.map((cate) => {
                        const isActive = currentCategory === cate.id;
                        return (
                            <li key={cate.id} className={isActive ? "active" : ""}>
                                <a
                                    href="#none"
                                    title={isActive ? "선택됨" : ""}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSelectCategory(cate.id);
                                    }}
                                >
                                    <span>{cate.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="b-category-m pc-hide">
                <label htmlFor="category-op">
                    {categories.find((cate) => cate.id === currentCategory)?.label || "전체"}
                </label>
                <select
                    className="sel-category board-tab-sel"
                    id="category-op"
                    value={currentCategory}
                    onChange={(e) => onSelectCategory(e.target.value)}
                >
                    {categories.map((cate) => (
                        <option key={cate.id} value={cate.id}>
                            {cate.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}