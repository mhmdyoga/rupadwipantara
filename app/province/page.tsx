"use client"
import AnimatedContent from '@/components/AnimatedContent';
import TextType from '@/components/TextType';
import { Kanit } from 'next/font/google';
import Image from 'next/image'
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Character from '@/components/Character';
import AudioManager from '@/components/AudioManager';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownLeft, Earth } from 'lucide-react';

const Kanit_ = Kanit({
  subsets: ["thai"],
  weight: [
    "100",
    "400",
    "800"
  ],
  style: "normal"
})

const Province = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 10000);
  }, [])


  return (
    <div className='fixed top-0 left-0 flex md:flex-col flex-col-reverse items-center justify-center w-full h-screen bg-[#76250E] overflow-hidden text-white z-0'>
      {/* peta indonesia */}
      <div className=''>
        {/* mata angin */}
        <div className=''>
          <Image src={"/assets/mata-angin.png"} alt='' width={120} height={120} className='w-auto h-auto fixed mt-12 ml-[1150px]' />
        </div>

        {/* sumut */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.4}
        >
          <motion.div
            animate={{
              y: [0, -10, 0], // naik lalu turun
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className=''>
            <Image src={"/assets/bolon.png"} alt='' width={36} height={36} className='fixed md:w-12 w-6 md:mt-36 mt-18 md:-ml-4 -ml-2 h-auto hover:-translate-y-3 transition-all' />
          </motion.div>
        </AnimatedContent>


        {/* jakarta (ondel-ondel) */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.2}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className=''>
            <Image src={"/assets/ondel-ondel.png"} alt='' width={36} height={36} className='fixed cursor-pointer md:w-9 w-3 md:mt-[450px] mt-48 md:ml-[260px] ml-[84px] h-auto hover:-translate-y-3 transition-all' />
          </motion.div>
        </AnimatedContent>

        {/* banten */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.2}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Dialog >
              <DialogTrigger>
                <ArrowDownLeft className='text-white font-bold fixed md:mt-[420px] mt-40 md:ml-[218px] ml-14 rotate-y-180' />
                <Image src={"/assets/rumah-leuit.png"} alt='' width={36} height={36} className='fixed cursor-pointer md:w-9 w-3 md:mt-[435px] mt-[172px] md:ml-56 ml-18 h-auto hover:-translate-y-3 transition-all' />
              </DialogTrigger>
              
              <DialogContent className="md:w-[1000px] max-w-none bg-transparent border-0 shadow-none flex flex-col items-center justify-center font-serif">
              <div className="relative inset-0 bg-gradient-to-t w-[1000px] from-black/40 via-transparent to-black/50 pointer-events-none rounded-xl" />
                
                {/* Header */}
                <DialogHeader className="z-10">
                  <DialogTitle className="md:text-center text-left md:text-xl text-sm text-[#F2E4C9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    Budaya Baduy
                  </DialogTitle>
                  <DialogDescription className="md:text-center text-left italic md:text-2xl text-lg text-[#E6D3B1] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    Gunung Ulah dilebur, Lebak ulah dirusak
                  </DialogDescription>
                </DialogHeader>

                {/* Audio */}
                {isReady && <AudioManager src="/audio/pembuka_baduy.mp3" />}

                {/* Dialog Content */}
                <div className="relative flex md:flex-row flex-col items-start justify-center gap-2 md:gap-4 mt-4">
                  {/* Character */}
                  <Image
                    src="/assets/MEYCA.png"
                    alt="Meyca"
                    width={200}
                    height={350}
                    className="w-auto h-[150px] md:h-[400px] md:-ml-10 -ml-2 z-10"
                  />

                  {/* Text Box */}
                  <div className="relative bg-[#F2E4C9]/95 text-[#2A1E1E] rounded-2xl mt-20 border border-[#d9c2a4] shadow-[0_4px_15px_rgba(0,0,0,0.25)] p-4 md:p-6 md:w-[720px] w-[90%]">
                    {/* Character Name */}
                    <p className="font-bold text-center text-lg border-b border-[#d8b98f] pb-1 mb-3">
                      Meyca
                    </p>

                    {/* Dialog Text */}
                    <TextType
                      text={[
                        "Baduy merupakan salah satu suku di pedalaman Banten, yang jauh dari modernitas dan teguh menjaga tradisi leluhur.",
                      ]}
                      typingSpeed={45}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      className="text-sm md:text-lg font-medium leading-relaxed"
                    />

                    {/* Pointer (segitiga ke kiri) */}
                    <div className="absolute -left-3 bottom-8 w-0 h-0 border-t-10 border-b-10 border-r-15 border-t-transparent border-b-transparent border-r-[#F2E4C9]/95" />
                  </div>
                </div>

                {/* Button */}
                <Button
                  onClick={() => (window.location.href = "/province/banten/baduy")}
                  variant="default"
                  className="flex flex-row gap-2 items-center md:-mt-28 ml-96   w-60 bg-[#2A1E1E] text-[#F2E4C9] hover:bg-[#3b2b1a] border border-[#cdb89c]"
                >
                  <Earth className="w-5 h-5" /> Yok Jelajahi
                </Button>

              </DialogContent>

            </Dialog>
          </motion.div>
        </AnimatedContent>


        {/* bali */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1}
        >
          <Dialog>
            <DialogTrigger>
              {/* motion.div jadi yang fixed */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="fixed z-50 md:mt-[449px] mt-[154px] md:ml-[480px] ml-[146px] md:w-14 w-8 hover:cursor-pointer"
              >
                <Image
                  src="/assets/pura-bali.png"
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-auto transition-all hover:-translate-y-3"
                />
              </motion.div>
            </DialogTrigger>

            <DialogContent className='w-[1250px]'>
              <DialogHeader>
                <DialogTitle>Penjelasan mengenai Provinsi Bali</DialogTitle>
                <div className='flex flex-row-reverse gap-2'>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                    consectetur a quia neque dignissimos labore voluptates incidunt, earum
                    aspernatur perferendis, totam commodi maxime natus delectus aliquam,
                    possimus molestiae officia doloremque.
                  </DialogDescription>
                  {/* character */}
                  <Character />
                </div>

              </DialogHeader>
            </DialogContent>
          </Dialog>
        </AnimatedContent>


        {/* Kalsel */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.6}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={"/assets/betang-dayak.png"} alt='' width={36} height={36} className='fixed z-50 md:w-14 w-7 md:mt-[309px] mt-[95px] md:ml-[400px] ml-[120px] h-auto hover:-translate-y-3 transition-all' />
          </motion.div>
        </AnimatedContent>


        {/* sulsel */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.8}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={"/assets/tongkang.png"} alt='' width={36} height={36} className='fixed z-100 md:w-12 w-6 md:mt-[359px] mt-[119px] md:ml-[640px] ml-[199px] h-auto hover:-translate-y-3 transition-all' />
          </motion.div>
        </AnimatedContent>



        <Image src="/assets/peta-indoesia-2.png" alt="" width={800} height={800} className='md:w-[1222px] md:h-[648px] w-[521px] h-[228px]' />

      </div>

      {/* title */}
      <div className='flex flex-col gap-2 '>
        <TextType
          text={["Indonesia"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className={`font-extrabold text-white md:text-9xl text-7xl md:-ml-[750px] -ml-1 md:-mt-20 -mt-32 ${Kanit_.className}`}
        />
      </div>
    </div>
  )
}

export default Province