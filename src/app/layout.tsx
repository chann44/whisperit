import { AppProvider } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/toaster";
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
  authmodal,
}: {
  children: React.ReactNode;
  authmodal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={cn(font.className, "py-5")}>
          <div className="container mx-auto max-w-7xl h-full">
            <SiteHeader />
            {children}
          </div>
          {authmodal}
          <Toaster />
        </body>
      </AppProvider>
    </html>
  );
}
