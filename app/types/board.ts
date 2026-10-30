// 카테고리
export interface CategoryItem {
  id: string;
  label: string;
}

export interface BoardCategoryProps {
  categories: CategoryItem[];
  currentCategory: string;
  onSelectCategory: (id: string) => void;
}

// 검색 조건
export interface SearchItem {
  id: string;
  option: string;
}

export interface BoardSearchProps { 
  searchCategory:SearchItem[];
  currentSearch:string;
  onSelectSearch:(id:string) => void;
  onSearch: () => void;
}