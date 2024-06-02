import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Konnex",
  description: "Workflow app. By NimiraTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f9f9df]">
        <Providers>
          <TopNav />
          <main className="container mx-auto">
          {children}
          </main>          
        </Providers>  
      </body>
    </html>
  );
}
