import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "SmartServe",
  description: "Smart food ordering platform",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <CartProvider>

            <Navbar />

            {children}

          </CartProvider>


        </ThemeProvider>

      </body>

    </html>

  );
}