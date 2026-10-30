export type TabId = "all" | "news" | "people" | "research" 
export interface TabItem {
    id:TabId;
    label:string;
}