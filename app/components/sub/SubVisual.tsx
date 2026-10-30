'use client';
import { usePathname } from 'next/navigation';
import { NAV_ITEM } from "@/app/constants/navigation";

export default function SubVisual() {
    const pathname = usePathname();
    const matchedItem = NAV_ITEM.find((item) =>
        item.subMenus?.some((sub) => sub?.path === pathname)
    );
    const currentTitle = matchedItem ? matchedItem.title : "서브 비주얼";

    return (
        <div className="sub-visual-box">
            <h2>
                {currentTitle}
            </h2>
        </div>
    );
}