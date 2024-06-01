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
      <body className="bg-[#f6f6ce]">
        <Providers>
          <TopNav />
          <main className="container mx-auto p-10">
          {children}
          </main>          
        </Providers>  
      </body>
    </html>
  );
}
