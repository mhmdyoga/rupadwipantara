// components/AudioManager.js
"use client";
import { useEffect, useRef } from "react";

export default function AudioManager({ src }: any) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // main otomatis begitu masuk halaman (setelah navigasi)
    (audio as any).play().catch(() => {
      console.log("Autoplay diblokir, butuh interaksi user dulu");
    });

    return () => (audio as any).pause(); // stop kalau keluar halaman
  }, [src]);

  return <audio ref={audioRef} src={src} />;
}
