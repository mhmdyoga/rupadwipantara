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
                        reverse={true}
                        duration={1.2}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.1}
                    >
                        <h2 className='w-96 text-gray-900 font-semibold'>Indonesia dikenal sebagai negeri yang kaya akan kebudayaan, di mana setiap provinsi memiliki keunikan dan warisan tradisi yang berbeda-beda. Melalui lomba ini, kami mengajak generasi muda untuk mengenal, mencintai, dan melestarikan budaya bangsa melalui kreativitas digital. Dari rumah adat, tarian, musik, hingga kearifan lokal, semua menjadi bagian dari identitas yang patut dijaga dan diperkenalkan ke dunia. Mari bersama menumbuhkan semangat kebanggaan terhadap keberagaman budaya Indonesia, sekaligus memperkuat rasa persatuan dalam perbedaan. Inilah saatnya budaya Indonesia bersinar melalui inovasi dan karya generasi penerus bangsa.</h2>

                        <Button variant={"link"} onClick={() => router.push('/province')} className='cursor-pointer'>Jelajahi Peta <ExternalLink /></Button>
                    </AnimatedContent>

                </div>
            </div>

        </div>
    )
}

export default Introduction