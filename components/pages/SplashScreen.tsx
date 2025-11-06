"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedContent from "../AnimatedContent";
import TextType from "../TextType";
import { Button } from "../ui/button";
import { EarthIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/introduction");
    }, 900); // delay biar animasi keluar sempat jalan
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-[#76250E] overflow-hidden text-white">
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="splash"
            initial={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -80, scale: 1.2 }} // animasi keluar
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {/* === SEMUA KODE ASLI KAMU DITEMPATKAN DI SINI TANPA DIUBAH === */}
            <div className="absolute bottom-0 -ml-[1480px]">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.2}
              >
                <Image
                  src="/assets/cloud-ilustrasi.png"
                  alt=""
                  width={320}
                  height={320}
                  className="w-20 h-auto ml-96"
                />
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1}
              >
                <Image
                  src="/assets/rumah-badah-1.png"
                  alt="Rumah Ibadah Bali"
                  width={600}
                  height={600}
                  className="h-[90vh] w-[450px] translate-x-36 rotate-y-180 select-none"
                  priority
                />
              </AnimatedContent>
            </div>

            <div className="absolute bottom-0 ml-[1180px]">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.6}
              >
                <Image
                  src="/assets/cloud-ilustrasi.png"
                  alt=""
                  width={320}
                  height={320}
                  className="w-20 h-auto ml-5 fixed mt-5 translate-x-32 rotate-y-180"
                />
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1}
              >
                <Image
                  src="/assets/rumah-badah-1.png"
                  alt="Rumah Ibadah Bali"
                  width={600}
                  height={600}
                  className="h-[90vh] w-[1250px] select-none"
                  priority
                />
              </AnimatedContent>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <AnimatedContent
                distance={100}
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
                  className="w-20 h-auto ml-[650px] mt-40 translate-x-32 rotate-y-180"
                />
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.2}
              >
                <Image
                  src="/assets/cloud-ilustrasi.png"
                  alt=""
                  width={320}
                  height={320}
                  className="w-20 h-auto mt-[280px] -ml-96"
                />
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1.2}
              >
                <div className="flex flex-col -mt-60">
                  <h1 className="font-extrabold text-4xl md:text-7xl lg:text-8xl">
                    SELAMAT DATANG
                  </h1>
                  <h2 className="font-extrabold text-3xl md:text-6xl lg:text-7xl">
                    DI
                  </h2>
                  <h2 className="font-extrabold text-3xl md:text-6xl lg:text-7xl">
                    LOKARUPA
                  </h2>
                  <span className="font-bold text-sm md:text-xl lg:text-2xl w-80 md:w-full">
                    gerbang yang akan membawa kalian menyelami sejarah budaya Indonesia
                  </span>
                  <Button
                    variant={"outline"}
                    onClick={handleClick}
                    className="text-black w-32 font-bold cursor-pointer text-sm flex flex-row-reverse gap-2 items-center justify-center md:ml-96 ml-24 mt-8"
                  >
                    Yok jelajahi <EarthIcon />
                  </Button>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.8}
              >
                <div className="flex flex-row justify-center items-center mt-20">
                  <Image
                    src="/assets/ilustrasi.png"
                    alt="Ilustrasi 1"
                    width={200}
                    height={200}
                    className="w-[220px] md:w-[280px]  h-auto"
                  />
                  <Image
                    src="/assets/ilustrasi (3).png"
                    alt="Ilustrasi 2"
                    width={200}
                    height={200}
                    className="w-[220px] md:w-[280px] h-auto fixed"
                  />
                  <Image
                    src="/assets/ilustrasi.png"
                    alt="Ilustrasi 3"
                    width={200}
                    height={200}
                    className="w-[220px] md:w-[280px] h-auto rotate-y-180 ml-20"
                  />
                </div>
              </AnimatedContent>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
