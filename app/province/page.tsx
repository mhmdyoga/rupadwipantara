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
    <div className='relative flex md:flex-col flex-col-reverse items-center justify-center w-full h-screen bg-[#76250E] overflow-hidden text-white'>
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
            <Image src={"/assets/ondel-ondel.png"} alt='' width={36} height={36} className='fixed md:w-12 w-6 md:mt-[425px] mt-[162px] md:ml-56 ml-14 h-auto hover:-translate-y-3 transition-all' />
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
                className="fixed z-50 md:mt-[449px] mt-[154px] md:ml-[480px] ml-[134px] md:w-14 w-8 hover:cursor-pointer"
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
          <div className=''>
            <Image src={"/assets/loc-province.png"} alt='' width={36} height={36} className='fixed z-50 md:w-6 w-3 md:mt-[309px] mt-[95px] md:ml-[400px] ml-[120px] h-auto hover:-translate-y-3 transition-all' />
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
            <Image src={"/assets/loc-province.png"} alt='' width={36} height={36} className='fixed z-100 md:w-6 w-3 md:mt-[379px] mt-[129px] md:ml-[650px] ml-[188px] h-auto hover:-translate-y-3 transition-all' />
          </div>
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