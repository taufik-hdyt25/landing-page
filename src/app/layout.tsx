import { Metadata } from "next";
import {
  Caladea,
  Dancing_Script,
  Josefin_Sans,
  Lobster_Two,
  Noto_Naskh_Arabic,
  Sacramento,
} from "next/font/google";
import "./global.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Aplikasi Saya",
    template: "%s",
  },
  description: "Aplikasi web modern dengan fitur lengkap.",
  keywords: ["aplikasi", "web", "react", "nextjs", "shadcn"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://example.com",
    siteName: "Aplikasi Saya",
    images: [
      {
        url: "https://example.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aplikasi Saya OG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nama_twitter",
    title: "Aplikasi Saya",
    description: "Aplikasi web modern dengan fitur lengkap.",
    images: ["https://example.com/og.jpg"],
  },
  metadataBase: new URL("https://example.com"),
};

const Lobster = Lobster_Two({
  subsets: ["latin"],
  variable: "--font-Lobster",
  weight: ["700"],
});

const caladea = Caladea({
  subsets: ["latin"],
  variable: "--font-Caladea",
  weight: ["400", "700"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700", "500", "600"],
});

const fontEsthetic = Sacramento({
  subsets: ["latin"],
  variable: "--font-esthetic",
  weight: ["400"],
});
const fontArabic = Noto_Naskh_Arabic({
  subsets: ["latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});
const fontText = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-fontText",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`${Lobster.variable} chakra-ui-light ${caladea.variable} ${dancing.variable} ${fontEsthetic.variable} ${fontArabic.variable} ${fontText.variable}`}
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
