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
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-screen bg-[#76250E] overflow-hidden text-white'>
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
            <Image src={"/assets/bolon.png"} alt='' width={36} height={36} className='fixed w-12 mt-36 -ml-4 h-auto hover:-translate-y-3 transition-all' />
          </motion.div>
        </AnimatedContent>


        {/* jawa */}
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
            <Image src={"/assets/ondel-ondel.png"} alt='' width={36} height={36} className='fixed w-12 mt-[425px] ml-56 h-auto hover:-translate-y-3 transition-all' />
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
                className="fixed z-50 mt-[449px] ml-[480px] w-14 hover:cursor-pointer"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  consectetur a quia neque dignissimos labore voluptates incidunt, earum
                  aspernatur perferendis, totam commodi maxime natus delectus aliquam,
                  possimus molestiae officia doloremque.
                </DialogDescription>
                {/* character */}
                <Character/>
                
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
          <div className=''>
            <Image src={"/assets/loc-province.png"} alt='' width={36} height={36} className='fixed z-50 w-6 mt-[309px] ml-[400px] h-auto hover:-translate-y-3 transition-all' />
          </div>
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
          <div className=''>
            <Image src={"/assets/loc-province.png"} alt='' width={36} height={36} className='fixed z-100 w-6 mt-[379px] ml-[650px] h-auto hover:-translate-y-3 transition-all' />
          </div>
        </AnimatedContent>



        <Image src="/assets/peta-indoesia-2.png" alt="" width={800} height={800} className='w-[1222px] h-[648px]' />

      </div>
      {/* title */}
      <div className='flex flex-col gap-2'>
        {/* icon province */}
        <div className='flex flex-row gap-3 items-center'>

          <Image src="/assets/loc-province.png" alt='' width={36} height={36} className='w-6 h-auto -mt-32 -ml-[750px] fixed ' />

          <p className={`${Kanit_.className} fixed -mt-32 text-xl text-white font-bold -ml-[720px]`}>Provinsi</p>

        </div>
        <TextType
          text={["Indonesia"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className={`font-extrabold text-white text-9xl -ml-[750px] -mt-10 ${Kanit_.className}`}
        />
      </div>
    </div>
  )
}

export default Province