import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mindstormx.com"),
  title: {
    default: `${site.shortName} — Building Digital Ecosystems for Everyday Life`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "MindstormX",
    "Malaysia digital economy",
    "Johor technology",
    "doktor+",
    "pasar+",
    "khairat+",
    "reno+",
    "applied AI",
    "digital ecosystems",
    "MyDIGITAL",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: `${site.shortName} — ${site.positioning}`,
    description: site.description,
    type: "website",
    locale: "en_MY",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortName,
    description: site.description,
  },
  icons: {
    icon: "/mindstormx-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white font-sans text-slate-700 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
