"use client"
import { NAV_ITEM } from "@/app/constants/navigation";
import { usePathname } from "next/navigation";

export default function SubTitle() {

    const pathname = usePathname();
    const matchedItem = NAV_ITEM
        .flatMap((item) => item.subMenus)
        .find((sub) => sub?.path === pathname)
    const currentTitle = matchedItem ? matchedItem.title : "";

    return (
        <div className="page-title">
            <h3>{currentTitle}</h3>
        </div>
    );
}