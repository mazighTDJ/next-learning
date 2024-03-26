import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/providers/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog en nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        <ThemeProvider attribute="class" defaultTheme="systeme" enableSystem >
          <div className="flex flex-col justify-between min-h-screen overflow-hidden">

            <Header />
            
            <div className="flex-grow">
          {children}
          </div>

            <Footer />
          </div>
        
        </ThemeProvider>
        </body>
    </html>
  );
}
