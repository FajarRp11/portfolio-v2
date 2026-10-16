import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fajar Rahyu — Web Developer",
  description:
    "Web Developer portfolio specializing in high-performance web applications, design systems, and resilient UI architectures.",
  keywords: [
    "Fajar Rahyu",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Fajar Rahyu" }],
  openGraph: {
    title: "Fajar Rahyu — Web Developer",
    description:
      "Web Developer portfolio specializing in high-performance web applications, design systems, and resilient UI architectures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Rahyu — Web Developer",
    description:
      "Web Developer portfolio specializing in high-performance web applications, design systems, and resilient UI architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
