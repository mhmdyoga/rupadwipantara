import Image from "next/image";
import React from "react";
import AnimatedContent from "../AnimatedContent";
import TextType from "../TextType";

const SplashScreen = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-[#76250E] overflow-hidden text-white">



            {/* Dekor Kiri */}
            <div className="absolute bottom-0 -ml-[1480px]">
                {/* cloud */}
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
                    <Image src="/assets/cloud-ilustrasi.png" alt="" width={320} height={320} className="w-20 h-auto ml-96" />
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
            


            {/* Dekor Kanan (dibalik horizontal biar simetris) */}
            <div className="absolute bottom-0 ml-[1180px]">
                {/* cloud */}
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
                <Image src="/assets/cloud-ilustrasi.png" alt="" width={320} height={320} className="w-20 h-auto ml-5 fixed mt-5 translate-x-32 rotate-y-180" />
                 

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

             

            {/* Konten Tengah */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* cloud */}
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
                <Image src="/assets/cloud-ilustrasi.png" alt="" width={320} height={320} className="w-20 h-auto ml-[650px] mt-20 translate-x-32 rotate-y-180" />
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
            <Image src="/assets/cloud-ilustrasi.png" alt="" width={320} height={320} className="w-20 h-auto mt-[280px] -ml-96" />
                </AnimatedContent>
                
                {/* Judul */}
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
             <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl -mt-48 leading-tight drop-shadow-md tracking-wide">
                    MENGENAL BUDAYA
                </h1>
                <h2 className="font-script text-4xl md:text-6xl italic mt-2 drop-shadow-md">
                    Indonesia
                </h2>
                </AnimatedContent>
                

                {/* Subjudul */}
                <TextType 
  text={["Kekayaan Kebudayaan indonesia yang menyebar di seluruh nusantara"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="text-white font-bold text-2xl w-[450px] mt-10"
/>

                {/* Ilustrasi Karakter */}
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
        </div>
    );
};

export default SplashScreen;
