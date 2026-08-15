import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const title = "Stanhope Autoworks | Workshop & Mobile Mechanic in Derby";
const description =
  "Priority vehicle repairs in Derby, DE24. Same-day and next-available appointments for brakes, suspension, starting problems and more. Workshop and selected mobile mechanic service.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} antialiased`}>
      <body className="font-sans pb-[66px] sm:pb-0">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
