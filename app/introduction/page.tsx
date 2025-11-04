"use client";
import AnimatedContent from '@/components/AnimatedContent';
import Character from '@/components/Character'
import TextType from '@/components/TextType';
import { Button } from '@/components/ui/button'
import { ExternalLink, Link, Link2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

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
                        <div className=''>
                            <TextType
                                text={["Taukah kamu? Di Indonesia, budaya yang tersebar di seluruh Nusantara mencakup ribuan warisan budaya takbenda dan ratusan suku bangsa — mari kita lihat beberapa angkanya!"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className={`font-extrabold w-[450px] text-black md:text-xl text-sm md:-ml-[350px] -ml-1 md:-mt-28 -mt-40 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6  max-w-md`}
                            />
                        </div>
                    </AnimatedContent>
                    <Button variant={"link"} onClick={() => router.push('/province')} className='cursor-pointer'>Jelajahi Peta <ExternalLink /></Button>

                </div>
            </div>

        </div>
    )
}

export default Introduction