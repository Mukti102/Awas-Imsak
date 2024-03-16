import Link from "next/link";
import Button from "./Button";

function Hero() {
  return (
    <main className="p-10 w-1/2 h-screen text-white relative ">
      <h1 className="text-[115px] gradient-text  mt-10 leading-none line font-bold">
        Awas
        <br />
        Imsak!
      </h1>
      <p className="mb-10 text-base font-bold">
        Awas Imsak! hadir untuk anda yang sahur di jam 12 siang
      </p>
      <span className="font-semibold text-lg">
        Dari Abu Hurairah RA berkata, Rasulullah SAW bersabda: "Siapa berpuasa
        di bulan Ramadan dengan dilandasi iman dan ikhlas mengharap ridha Allah,
        maka diampuni dosanya yang lalu," (HR Al-Bukhari)
      </span>
      <div className="flex gap-0 my-8 justify-between">
        <Button href="/niat">Awas Lupa Niat</Button>
        <Button href="/tadarus">Awas Tadarus</Button>
        <Button href="/resep">Awas Masak</Button>
      </div>
      <span></span>
    </main>
  );
}

export default Hero;
