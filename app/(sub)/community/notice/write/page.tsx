import BoardWrite from "@/app/components/community/BoardWrite";

export default function NoticeWritePage() {
    return( 
        <BoardWrite fields={["notice", "title", "writer", "content", "file"]} />
    )
}