import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { BASE_URL, buildSeoMetadata } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  ...buildSeoMetadata({
    title: "Workshop & Mobile Mechanic in Derby",
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} antialiased`}>
      <body className="font-sans pb-16.5 sm:pb-0">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
