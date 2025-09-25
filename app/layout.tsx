import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credera | Unlock Extraordinary Opportunities",
  description: "Global consulting firm combining deep industry expertise with innovative technology solutions. We help clients achieve extraordinary results through strategic consulting, digital transformation, and technology services.",
  keywords: "consulting, digital transformation, strategy, technology solutions, business consulting, data analytics",
  authors: [{ name: "Credera" }],
  creator: "Credera",
  publisher: "Credera",
  openGraph: {
    title: "Credera | Unlock Extraordinary Opportunities",
    description: "Global consulting firm combining deep industry expertise with innovative technology solutions.",
    url: "https://credera.com",
    siteName: "Credera",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Credera | Unlock Extraordinary Opportunities",
    description: "Global consulting firm combining deep industry expertise with innovative technology solutions.",
    creator: "@Credera"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  viewport: {
    width: "device-width",
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
