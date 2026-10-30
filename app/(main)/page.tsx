import MainVisual from "../components/main/MainVisual";;
import MainQuickMenu from "../components/main/MainQuickMenu";
import MainCalendar from "../components/main/MainCalendar";
import MainNotice from "../components/main/MainNotice";
import MainNews from "../components/main/MainNews";
import MainGallery from "../components/main/MainGallery";
import MainShortLink from "../components/main/MainShortLink";
import "../styles/main.css";

export default function page() {
  return (
    <main className="main-content">
      <MainVisual />
      <MainQuickMenu />
      <MainCalendar />
      <MainNotice />
      <MainNews />
      <MainGallery />
      <MainShortLink />
    </main>
  );
}
