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
import { Earth } from 'lucide-react';

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
     }, 1000);
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


        {/* banten-jakarta (ondel-ondel) */}
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
            <Image src={"/assets/ondel-ondel.png"} alt='' width={36} height={36} className='fixed cursor-pointer md:w-9 w-6 md:mt-[425px] mt-[162px] md:ml-60 ml-20 h-auto hover:-translate-y-3 transition-all' />
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
              <Dialog>
            <DialogTrigger>
            <Image src={"/assets/rumah-leuit.png"} alt='' width={36} height={36} className='fixed cursor-pointer md:w-9 w-6 md:mt-[435px] mt-[162px] md:ml-56 ml-18 h-auto hover:-translate-y-3 transition-all' />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='text-center'>Baduy</DialogTitle>
                <DialogDescription className='text-center italic text-2xl'>
                 Gunung Ulah dilebur, Lebak ulah dirusak
                </DialogDescription>
              </DialogHeader>
              {isReady && <AudioManager src="/audio/pembuka_baduy.mp3"/>}
              <div className='flex flex-row gap-4 items-center'>
                <Image src={"/assets/MYCA.png"} alt='' width={200} height={350} className='w-auto h-[150px]'/>
                 <h2 className='w-96 text-black font-semibold'>Baduy merupakan salah satu suku di pedalaman Banten, yang jauh dari modernitas dan teguh menjaga tradisi leluhur.</h2>
              </div>
              <Button variant={"default"} className='flex flex-row gap-2 item-center w-60 ml-52'> <Earth/> Yok Jelajahi</Button>
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

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Penjelasan mengenai Provinsi Bali</DialogTitle>
                <DialogDescription>
                                              <AudioManager src="/assets/introduction_audio.mp3"/>
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  consectetur a quia neque dignissimos labore voluptates incidunt, earum
                  aspernatur perferendis, totam commodi maxime natus delectus aliquam,
                  possimus molestiae officia doloremque.
                </DialogDescription>
                {/* character */}
                <Character />

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
        {/* icon province */}
        <div className='md:flex md:flex-row md:gap-3 md:items-center hidden'>

          <Image src="/assets/loc-province.png" alt='' width={36} height={36} className='w-6 h-auto -mt-32 -ml-[750px] fixed ' />

          <p className={`${Kanit_.className} fixed -mt-32 text-xl text-white font-bold -ml-[720px]`}>Provinsi</p>

        </div>
        <TextType
          text={["Indonesia"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className={`font-extrabold text-white md:text-9xl text-7xl md:-ml-[750px] -ml-1 md:-mt-10 -mt-40 ${Kanit_.className}`}
        />
      </div>
    </div>
  )
}

export default Province