import { Josefin_Sans, Lobster_Two, Poppins } from "next/font/google";
const lobster = Lobster_Two({
  subsets: ["latin"],
  variable: "--font-Lobster",
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["700", "400", "500", "600"],
});

const fontText = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-fontText",
  weight: ["400", "500", "600", "700"],
});

export { lobster, fontText, poppins };
