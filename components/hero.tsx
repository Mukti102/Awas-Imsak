"use client";
import Button from "./Button";
import "aos/dist/aos.css"; // You may need to import the CSS file as well
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import AOS from "aos";
import patern from "@/public/patern.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";

// fonts
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

function Hero() {
  // const login = useAppSelector((state) => state.Login);
  const login = localStorage.getItem("user") !== null;
  // AOS
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="sm:p-10 p-8  lg:w-1/2 w-full sm:h-screen h-max text-white relative ">
      <div
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="800"
        className="sm:w-44 sm:h-44 w-40 h-40 absolute -top-20 sm:-top-24 left-5"
      >
        <Image
          alt="'patern"
          src={patern}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <h1
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className={`${poppins.className} lg:text-[115px]  text-[5rem] gradient-text  mt-14 sm:mt-10 leading-none line font-bold`}
      >
        Awas
        <br />
        Imsak!
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="mb-10 sm:text-base text-sm font-semibold"
      >
        Awas Imsak! hadir untuk anda yang sahur di jam 12 siang
      </p>
      <div
        className="text-[0.8rem] font-semibold"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1200"
      >
        Dari Abu Hurairah RA berkata, Rasulullah SAW bersabda: "Siapa berpuasa
        di bulan Ramadan dengan dilandasi iman dan ikhlas mengharap ridha Allah,
        maka diampuni dosanya yang lalu," (HR Al-Bukhari)
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1500"
        className="flex flex-wrap sm:flex-wrap sm:gap-0 gap-3 my-8 font-semibold sm:justify-between"
      >
        <Button href="/niat">Awas Lupa Niat</Button>
        <Button href="/tadarus">Awas Lupa Tadarus</Button>
        <Button href="/resep">Awas Lupa Masak</Button>
        <Button href={!login ? "/sign-in" : "/Self-Development"}>
          Self Development
        </Button>
      </div>
    </main>
  );
}

export default Hero;
