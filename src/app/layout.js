// src/app/layout.js
import { Geist, Geist_Mono, Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../design/ThemeProvider";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import GlobalBackground from "../components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.hex-gamestudio.com"),
  title: "Hex Game Studio",
  description:
    "Hex Game Studio designs original e-instant games built around time-based systems and alternative play patterns.",
  openGraph: {
    title: "Hex Game Studio",
    description: "Concept-driven iLottery games built on original mechanics.",
    url: "https://www.hex-gamestudio.com",
    siteName: "Hex Game Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex Game Studio",
    description: "Concept-driven iLottery games built on original mechanics.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${inter.variable} antialiased`}>
        <GlobalBackground />
        <ThemeProvider>
          <div className="site-frame">
            <SiteNav />
            {/* IMPORTANT: no global max-width/container here */}
            <div className="page-offset">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}