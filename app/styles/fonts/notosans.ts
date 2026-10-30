import localFont from 'next/font/local'

const notoSans = localFont({
    src: [
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Thin.woff2",
            weight: "100",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-ExtraLight.woff2",
            weight: "200",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Light.woff2",
            weight: "300",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Regular.woff2",
            weight: "400",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Medium.woff2",
            weight: "500",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-SemiBold.woff2",
            weight: "600",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Bold.woff2",
            weight: "700",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-ExtraBold.woff2",
            weight: "800",
        },
        {
            path: "../../../public/assets/fonts/notosans/NotoSansKR-Black.woff2",
            weight: "900",
        },
    ],
    display: "swap",
    variable: "--font-NotoSans"
})

export default notoSans