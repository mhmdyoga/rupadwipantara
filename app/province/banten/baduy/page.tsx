"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import { Kanit } from "next/font/google";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Kanit_ = Kanit({
  subsets: ["thai"],
  weight: ["100", "400", "800"],
  style: "normal",
});

const Baduy = () => {
  const router = useRouter();

  const cardData = [
    {
      title: "Nilai Luhur",
      desc: "Pelajari nilai-nilai luhur masyarakat Baduy.",
      img: "/assets/nilai-luhur.jpeg",
      path: "/province/banten/baduy/nilai-luhur",
    },
    {
      title: "Fakta Menarik",
      desc: "Temukan fakta-fakta menarik tentang Baduy.",
      img: "/assets/nilai-luhur.jpeg",
      path: "/province/banten/baduy/fakta-menarik",
    },
    {
      title: "Lokasi",
      desc: "Lihat lokasi dan wilayah masyarakat Baduy.",
      img: "/assets/nilai-luhur.jpeg",
      path: "/province/banten/baduy/lokasi",
      drawer: true, // tanda bahwa card ini pakai drawer
    },
  ];

  return (
    <div className="bg-[#76250E] absolute top-0 left-0 w-full h-[90hv] overflow-hidden">
      {/* Cloud elements */}
      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1.2}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto right-48 fixed mt-5 translate-x-32 rotate-y-180 hidden md:block"
        />
      </AnimatedContent>

      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.8}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto right-80 fixed mt-20 translate-x-32 rotate-y-180 hidden md:block"
        />
      </AnimatedContent>

      <AnimatedContent
        distance={50}
        direction="horizontal"
        reverse={true}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1}
      >
        <Image
          src="/assets/cloud-ilustrasi.png"
          alt=""
          width={320}
          height={320}
          className="w-20 h-auto left-0 fixed mt-5 translate-x-32 hidden md:block"
        />
      </AnimatedContent>

      {/* Title */}
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1.5}
      >
        <div className="flex items-center justify-center">
          <h2
            className={`text-white font-bold text-4xl fixed mt-32 ${Kanit_.className}`}
          >
            Baduy
          </h2>
        </div>
      </AnimatedContent>

      {/* Cards */}
      <div className="flex items-center justify-center min-h-screen px-3 py-8">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {cardData.map((card, i) =>
            card.drawer ? (
              // --- Drawer khusus untuk LOKASI ---
              <Drawer key={i}>
                <DrawerTrigger asChild>
                  <Card
                    className="w-full max-w-[300px] sm:max-w-[350px] h-auto flex flex-col-reverse mx-auto transform scale-[0.9] sm:scale-100 transition-transform duration-300 hover:scale-95 cursor-pointer"
                  >
                    <CardHeader className="pt-4 pb-2">
                      <CardTitle className="text-base sm:text-lg">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        {card.desc}
                      </CardDescription>
                      <Button
                        variant="default"
                        className="w-full mt-2 text-sm sm:text-base"
                      >
                        Buka Lokasi
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={334}
                        height={71}
                        className="w-full h-auto rounded-2xl"
                      />
                    </CardContent>
                  </Card>
                </DrawerTrigger>

                <DrawerContent className="bg-[#2c1a11] text-white border-t border-white/20">
                  <DrawerHeader>
                    <DrawerTitle className="text-xl font-bold text-white">
                      Lokasi Masyarakat Baduy
                    </DrawerTitle>
                    <DrawerDescription className="text-white/70">
                      Desa Kanekes, Kabupaten Lebak, Provinsi Banten.
                    </DrawerDescription>
                  </DrawerHeader>

                  {/* Embed map langsung */}
                  <div className="p-4">
                    <div className="rounded-xl overflow-hidden border border-white/10">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.480842783318!2d106.27226587499454!3d-6.329765062010547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42e012a962f5e9%3A0x3db9c8736a1972b1!2sDesa%20Kanekes!5e0!3m2!1sid!2sid!4v1695678184591!5m2!1sid!2sid"
                        width="100%"
                        height="300"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  <DrawerFooter className="flex justify-between">
                    <DrawerClose asChild>
                      <Button variant="secondary">Tutup</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ) : (
              // --- Default card (tanpa drawer) ---
              <Card
                key={i}
                onClick={() => router.push(card.path)}
                className="w-full max-w-[300px] sm:max-w-[350px] h-auto flex flex-col-reverse mx-auto transform scale-[0.9] sm:scale-100 transition-transform duration-300 hover:scale-95 cursor-pointer"
              >
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-base sm:text-lg">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {card.desc}
                  </CardDescription>
                  <Button
                    variant="default"
                    className="w-full mt-2 text-sm sm:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(card.path);
                    }}
                  >
                    Kunjungi
                  </Button>
                </CardHeader>
                <CardContent>
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={334}
                    height={71}
                    className="w-full h-auto rounded-2xl"
                  />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Baduy;
