import BoardDetail from "@/app/components/community/BoardDetail";

interface NewsDetailProps {
    params: {
        id: string;
    };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
    const {id} = params;

    return (
        <BoardDetail id={id} />
    )
}