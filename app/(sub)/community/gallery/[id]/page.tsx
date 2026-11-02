import BoardDetail from "@/app/components/community/BoardDetail";

interface GalleryDetailProps {
    params: {
        id: string;
    };
}

export default function GalleryDetailPage({ params }: GalleryDetailProps) {
    const {id} = params;

    return (
        <BoardDetail id={id} />
    )
}