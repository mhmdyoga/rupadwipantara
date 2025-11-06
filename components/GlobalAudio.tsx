"use client";
import { useEffect, useRef, useState } from "react";

const GlobalAudio = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    console.log("🔊 GlobalAudio mounted");

    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
      console.log("🎶 Audio element created:", src);
    }

    const handleUserInteraction = () => {
      console.log("🖱️ User interacted");
      if (audioRef.current && !hasPlayed) {
        audioRef.current
          .play()
          .then(() => {
            console.log("✅ Audio mulai diputar!");
            setHasPlayed(true);
          })
          .catch((err) => {
            console.log("❌ Gagal autoplay:", err);
          });
      }
    };

    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      console.log("🧹 Cleanup GlobalAudio");
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [hasPlayed, src]);

  return null;
};

export default GlobalAudio;
