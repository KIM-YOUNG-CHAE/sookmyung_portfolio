"use client";
import { usePathname } from 'next/navigation';
import { NAV_ITEM } from "@/app/constants/navigation";

export default function SubVisual() {
    const pathname = usePathname();

    const matchedItem = NAV_ITEM.find((item) => {
        if (!item.subMenus) return false;
        return item.subMenus.some((sub) => {
            if (!sub.path) return false;
            if (sub.path === "/") {
                return pathname === "/";
            }
            return pathname.startsWith(sub.path);
        });
    });

    const currentTitle = matchedItem ? matchedItem.title : "서브 비주얼";

    return (
        <div className="sub-visual-box">
            <h2>
                {currentTitle}
            </h2>
        </div>
    );
}