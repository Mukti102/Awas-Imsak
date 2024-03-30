"use client";
import Hero from "@/components/hero";
import Jadwal from "@/components/jadwal";
function Home() {
  return (
    <main className="flex flex-col sm:flex-row w-full sm:h-screen">
      <Hero />
      <Jadwal />
    </main>
  );
}

export default Home;
