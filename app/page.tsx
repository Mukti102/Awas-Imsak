import Image from "next/image";
import Hero from "@/components/hero";
import Jadwal from "@/components/jadwal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awas Imsak! hadir untuk anda yang sahur di jam 12 siang",
  description:
    'Dari Abu Hurairah RA berkata, Rasulullah SAW bersabda: "Siapa berpuasa di bulan Ramadan dengan dilandasi iman dan ikhlas mengharap ridha Allah,maka diampuni dosanya yang lalu," (HR Al-Bukhari)',
};

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <Hero />
      <Jadwal />
    </main>
  );
}
