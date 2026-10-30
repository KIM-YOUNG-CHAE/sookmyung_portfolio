import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import TopBanner from "./components/common/TopBanner";
import "./styles/globals.css";
import "./styles/layout.css";
import 'swiper/css';
import 'swiper/css/navigation';
import notoSans from "./styles/fonts/notosans";
import BodyClassManager from "./components/common/BodyClassManager";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.variable}`} >
        <BodyClassManager />

        <TopBanner />
        <Header />
        {children}       {/* (main), (sub), (auth)의 각 페이지가 렌더링되는 위치 */}
        <Footer />
      </body>
    </html>
  );
}