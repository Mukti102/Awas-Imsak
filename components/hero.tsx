"use client";
import Button from "./Button";
import "aos/dist/aos.css"; // You may need to import the CSS file as well
import { useEffect } from "react";
import AOS from "aos";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="p-10 w-1/2 h-screen text-white relative ">
      <h1
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-[115px] gradient-text  mt-10 leading-none line font-bold"
      >
        Awas
        <br />
        Imsak!
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="mb-10 text-base font-bold"
      >
        Awas Imsak! hadir untuk anda yang sahur di jam 12 siang
      </p>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
        Dari Abu Hurairah RA berkata, Rasulullah SAW bersabda: "Siapa berpuasa
        di bulan Ramadan dengan dilandasi iman dan ikhlas mengharap ridha Allah,
        maka diampuni dosanya yang lalu," (HR Al-Bukhari)
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1500"
        className="flex gap-0 my-8 justify-between"
      >
        <Button href="/niat">Awas Lupa Niat</Button>
        <Button href="/tadarus">Awas Lupa Tadarus</Button>
        <Button href="/resep">Awas Lupa Masak</Button>
      </div>
    </main>
  );
}

export default Hero;
