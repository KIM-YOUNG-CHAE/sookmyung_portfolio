import BoardWrite from "@/app/components/community/BoardWrite";

export default function page() {
    return (
        <BoardWrite fields={["title", "content"]}/>
    );
}