"use client";
import AnimatedContent from "@/components/AnimatedContent";
import AudioManager from "@/components/AudioManager";
import Character from "@/components/Character";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Introduction = () => {
  const [ready, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col top-0 absolute items-center justify-center w-full h-screen overflow-hidden bg-[#6A1E0A] text-white">

      {/* Background cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6A1E0A] via-[#5A1B0A] to-[#3A0D05] opacity-95" />
      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1.2}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto ml-20 fixed mt-5 translate-x-32 rotate-y-180 hidden md:block"
        />
      </AnimatedContent>

      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.8}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto right-80 fixed mt-20 translate-x-32 rotate-y-180 hidden md:block"
        />
      </AnimatedContent>

      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={true}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto left-0 fixed mt-5 translate-x-32 hidden md:block"
        />
      </AnimatedContent>
         
      {/* Karakter di tengah bawah */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-20 flex justify-center items-end w-full md:-mb-10 -mb-16"
      >
        <Character />
      </motion.div>

      {/* Dialog Box */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-8 md:bottom-14 left-1/2 -translate-x-1/2 z-30 
                   w-[90%] md:w-[600px] backdrop-blur-lg rounded-2xl p-6 
                   bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
      >
        {ready && <AudioManager src="/audio/Pembuka_Meyca.mp3" />}

        <h2 className="font-semibold text-base md:text-lg text-black drop-shadow-md leading-relaxed">
          <TextType
            text={[
              "Indonesia terdiri dari ratusan warisan budaya yang tersebar di seluruh pulau dan harus kita lestarikan.",
            ]}
            typingSpeed={45}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h2>

        <div className="flex justify-end mt-3">
          <Button
            variant="link"
            onClick={() => router.push("/province")}
            className="text-white hover:underline flex items-center gap-1"
          >
            Jelajahi Peta <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
