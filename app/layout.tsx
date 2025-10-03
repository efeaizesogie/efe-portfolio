import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Efe Aizesogie | Frontend Developer",
  description: "Efe Aizesogie | Frontend Developer",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
