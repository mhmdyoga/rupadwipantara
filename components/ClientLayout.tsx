"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import GlobalAudio from "@/components/GlobalAudio";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = "/";
  const pathName = usePathname();

  return (
    <>
      <GlobalAudio src="/audio/AUDIO_NUSANTARA.mp3" />
      {pathName !== path && <Navbar />}
      {children}
    </>
  );
}
