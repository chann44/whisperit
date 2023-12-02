import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Whisper it",
  description: "Reddit Before Reddit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "py-5")}>
        <div className="container mx-auto max-w-7xl h-full">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}