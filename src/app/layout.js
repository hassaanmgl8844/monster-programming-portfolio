import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monster Programming",
  description: "Monster Coder of the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen bg-black `}
      >
        <Navbar />
        <Video />
        <Home />
        {children}
      </body>
    </html>
  );
}
