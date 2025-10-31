"use client";
import SplashScreen from "@/components/pages/SplashScreen";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

 const router = useRouter();

  useEffect(() => {
  setTimeout(() => {
    router.push("/province")
  },7000);
  });

  return (
    <>
      <SplashScreen/>
    </>
  );
}
