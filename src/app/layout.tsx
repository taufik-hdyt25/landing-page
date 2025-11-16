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
import { configEnv } from "@/lib/configEnv";

export const metadata: Metadata = {
  title: {
    default: "Wedding Invitation",
    template: "%s",
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  description:
    "Undangan pernikahan modern dengan tampilan elegan, informasi lengkap, dan akses mudah untuk para tamu.",
  keywords: [
    "wedding invitation",
    "undangan pernikahan",
    "digital wedding",
    "undangan online",
    "acara pernikahan",
  ],
  robots: "index, follow",

  metadataBase: new URL(`${configEnv.domainUrl}`),

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: configEnv.domainUrl,
    siteName: "Wedding Invitation",
    title: "Wedding Invitation",
    description:
      "Undangan pernikahan digital yang elegan, interaktif, dan mudah dibagikan.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation",
    description:
      "Undangan pernikahan digital yang elegan, interaktif, dan mudah dibagikan.",
    images: [""],
  },
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
