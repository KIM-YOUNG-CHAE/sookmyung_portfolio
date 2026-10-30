import BoardDetail from "@/app/components/community/BoardDetail";

interface NoticeDetailProps {
    params: {
        id: string;
    };
}

export default function NoticeDetailPage({ params }: NoticeDetailProps) {
    const {id} = params;

    return (
        <BoardDetail id={id} />
    )
}