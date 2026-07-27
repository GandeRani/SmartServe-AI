import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/components/CartContext";

import Navbar from "@/components/Navbar";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "SmartServe AI 🤖",

  description:
    "AI powered restaurant intelligence platform with smart ordering, AI recommendations, sales prediction, inventory forecasting and analytics.",
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
    >

      <body>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <CartProvider>

            {/* Top Navigation */}
            <Navbar />


            {/* AI Assistant Floating Chat */}
            <AIChat />


            {/* Main Application Pages */}
            {children}


            {/* Website Footer */}
            <Footer />


          </CartProvider>


        </ThemeProvider>


        {/* Vercel Performance Monitoring */}
        <SpeedInsights />

      </body>

    </html>
  );
}