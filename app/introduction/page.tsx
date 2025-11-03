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
        <div className='bg-white w-full h-screen'>
            <div className='md:mt-0 mt-20'>
                <Character />
            </div>
            <div className="p-6">
                <div className='p-6 w-full md:h-56 h-[369px] md:-mt-52 -mt-10 rounded-xl bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-lg border border-black/20 shadow-xl'>
                    <TextType
                        text={["Indonesia dikenal sebagai negeri yang kaya akan kebudayaan, di mana setiap provinsi memiliki keunikan dan warisan tradisi yang berbeda-beda. Melalui lomba ini, kami mengajak generasi muda untuk mengenal, mencintai, dan melestarikan budaya bangsa melalui kreativitas digital. Dari rumah adat, tarian, musik, hingga kearifan lokal, semua menjadi bagian dari identitas yang patut dijaga dan diperkenalkan ke dunia. Mari bersama menumbuhkan semangat kebanggaan terhadap keberagaman budaya Indonesia, sekaligus memperkuat rasa persatuan dalam perbedaan. Inilah saatnya budaya Indonesia bersinar melalui inovasi dan karya generasi penerus bangsa."]}
                        typingSpeed={50}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className={`text-gray md:text-lg text-sm `}
                    />
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={true}
                        duration={1.2}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={37}
                    >
                        <Button variant={"link"} onClick={() => router.push('/province')} className='cursor-pointer ml-[1250px]'>Jelajahi Peta <ExternalLink /></Button>
                    </AnimatedContent>

                </div>
            </div>

        </div>
    )
}

export default Introduction