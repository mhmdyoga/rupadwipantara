"use client";
import AnimatedContent from '@/components/AnimatedContent';
import AudioManager from '@/components/AudioManager';
import Character from '@/components/Character';
import TextType from '@/components/TextType';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Introduction = () => {
  const [ready, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Jalankan delay 1 detik, lalu ubah state menjadi true
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    // Cleanup biar gak leak kalau komponen di-unmount
    return () => clearTimeout(timer);
  }, []); // <- penting: dependency array kosong agar hanya jalan sekali

  return (
    <div className='bg-white flex items-center justify-center md:flex-row flex-col gap-2 w-full h-screen'>
      <div className='md:mt-0 -mt-40'>
        <Character />
      </div>
      <div className="p-6">
        <div className='flex flex-col gap-4'>
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
                bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6
                md:w-[450px] w-[250px] h-auto
                md:-ml-[350px] -ml-6
                md:-mt-28 -mt-24 will-change-[opacity,transform]"
              >
                {ready && <AudioManager src="/audio/Pembuka_Meyca.mp3" />}

                <TextType
                  text={[
                    "Indonesia terdiri dari ratusan warisan budaya yang tersebar di seluruh pulau dan harus kita lestarikan.",
                  ]}
                  typingSpeed={45}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />

                <Button
                  variant="link"
                  onClick={() => router.push('/province')}
                  className='cursor-pointer'
                >
                  Jelajahi Peta <ExternalLink />
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
