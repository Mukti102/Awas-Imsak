import Image from "next/image";
import Hero from "@/components/hero";
import Jadwal from "@/components/jadwal";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <Hero />
      <Jadwal />
    </main>
  );
}
