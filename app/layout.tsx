"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import GlobalAudio from "@/components/GlobalAudio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = "/";
  const pathName = usePathname();
  return (
    <html lang="en">
      <title>Rupadwipantara.</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalAudio src="/audio/AUDIO_NUSANTARA.mp3"/>
        {pathName !== path ? (
           <Navbar/>
        ): null}
        {children}
      </body>
    </html>
  );
}
