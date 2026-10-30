interface LayerPopupProps {
    isOpen: boolean;
    popupType: string;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}
