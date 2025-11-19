import { fontText, lobster, poppins } from "@/fonts/fonts";
import { siteMetadata } from "@/lib/seo";
import "./global.css";
import Providers from "./providers";
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lobster.variable}   ${fontText.variable} ${poppins.variable}  `}
    >
      <body
        cz-shortcut-listen="true"
        className={`chakra-ui-light`}
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
