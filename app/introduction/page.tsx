"use client";
import AnimatedContent from '@/components/AnimatedContent';
import AudioManager from '@/components/AudioManager';
import Character from '@/components/Character'
import TextType from '@/components/TextType';
import { Button } from '@/components/ui/button'
import { ExternalLink, Link, Link2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Introduction = () => {

    const router = useRouter();

    return (
        <div className='bg-white flex items-center justify-center md:flex-row flex-col gap-2 w-full h-screen'>
            <div className='md:mt-0 mt-20'>
                <Character />
            </div>
            <div className="p-6">
                <div className='flex flex-col gap-4 '>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.1}
                    >
                       <div className="fixed z-50 w-full flex justify-center items-center">
  <div
    className="font-extrabold text-black md:text-xl text-sm 
    bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 max-w-md
    md:w-[450px] w-[90%]
    md:-ml-[350px] -ml-[100px]
    md:-mt-28 -mt-24 will-change-[opacity,transform]"
  >
    <AudioManager src="/assets/introduction_audio.mp3" />
    <TextType
      text={[
        "Indonesia terdiri dari ratusan warisan budaya yang tersebar di seluruh pulau dan harus kita lestarikan.",
      ]}
      typingSpeed={25}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  </div>
</div>

                    </AnimatedContent>
                    <Button variant={"link"} onClick={() => router.push('/province')} className='cursor-pointer'>Jelajahi Peta <ExternalLink /></Button>

                </div>
            </div>

        </div>
    )
}

export default Introduction