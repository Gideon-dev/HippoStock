import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { BASE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/app/lib/seo";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Hippo Procurement Ltd",
    default: "Hippo Procurement Ltd",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "medical consumables Nigeria",
    "medical supplies Ghana",
    "pharmacy wholesale Nigeria",
    "clinic supplies West Africa",
    "factory direct procurement",
    "cheap medical supplies",
    "affordable medical consumables",
    "healthcare procurement Africa",
    "SME procurement Nigeria",
    "bulk medical supplies",
    "hippo procurement",
    "direct from factory Nigeria",
    "medical wholesale Ghana",
    "pharmacy stock Nigeria",
    "no middlemen procurement",
    "medical distributor Nigeria",
    "consumables supplier Lagos",
    "healthcare supplies Accra",
    "surgical consumables Nigeria",
    "hospital supplies West Africa",
    "PPE Nigeria",
    "gloves syringes Nigeria",
    "IV fluids Nigeria",
    "wound care supplies Nigeria",
    "diagnostic consumables Africa",
    "10-14 day delivery Nigeria",
    "fast medical delivery Ghana",
    "cheap pharmacy stock",
    "wholesale medical Nigeria",
    "procurement company Nigeria",
    "factory price medical",
    "reduce pharmacy costs",
    "cut procurement costs Nigeria",
    "SME medical supplies",
    "clinic procurement Ghana",
    "medical imports Nigeria",
    "health commodities Nigeria",
    "affordable healthcare supplies",
    "bulk order medical Nigeria",
    "trusted medical supplier Africa",
  ],
  openGraph: {
    siteName: "Hippo Procurement Ltd",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased w-full">
        <Navbar />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <Footer/>
      </body>
    </html>
  );
}
