import { configEnv } from "@/lib/configEnv";
import { Metadata } from "next";

export const SEO = {
  baseUrl: configEnv.domainUrl || "https://default.com",
  siteName: "Wedding Invitation",
  title: "Wedding App",
  description:
    "Undangan pernikahan digital yang elegan, interaktif, dan mudah dibagikan.",
  keywords: [
    "wedding invitation",
    "undangan pernikahan",
    "undangan online",
    "digital wedding",
    "acara pernikahan",
  ],
  ogImage: "/images/wedding.png",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SEO.baseUrl),
  title: {
    default: SEO.title,
    template: "%s",
  },
  description: SEO.description,
  keywords: SEO.keywords,
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SEO.baseUrl,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SEO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SEO.baseUrl,
  },
};

export function generateProductMetadata({
  nama,
  deskripsi,
  slug,
  gambar,
}: {
  nama: string;
  deskripsi: string;
  slug: string;
  gambar: string;
}) {
  const url = `https://tokohebat.com/produk/${slug}`;
  return {
    title: nama,
    description: deskripsi,
    openGraph: {
      title: nama,
      description: deskripsi,
      type: "product",
      images: [{ url: gambar }],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: nama,
      description: deskripsi,
      images: [gambar],
    },
    alternates: {
      canonical: url,
    },
  };
}
