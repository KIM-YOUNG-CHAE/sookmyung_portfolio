import SubPath from "../components/sub/SubPath";
import SubTitle from "../components/sub/SubTitle";
import SubVisual from "../components/sub/SubVisual";
import "../styles/board/board.css";

export default function SubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="sub-container">
            <div className="sub-visual-wrap">
                <SubVisual />
            </div>
            <div className="path-wrap">
                <SubPath />
            </div>
            <main className="content-wrap">
                <SubTitle />
                {children}
            </main>
        </div>
    );
}