"use client";
import { NAV_ITEM } from "@/app/constants/navigation";
import { usePathname } from "next/navigation";

export default function SubTitle() {
    const pathname = usePathname();

    const allSubMenus = NAV_ITEM.flatMap((item) => item.subMenus || []).filter(
        (sub) => sub.path
    );

    const matchedSubMenus = allSubMenus.filter((sub) => {
        if (sub.path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(sub.path);
    });

    const currentTitle = matchedSubMenus.length > 0 ? matchedSubMenus[0].title : "";

    return (
        currentTitle && (
            <div className="page-title">
                <h3>{currentTitle}</h3>
            </div>
        )
    );
}