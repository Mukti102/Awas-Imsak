"use client";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
function layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  console.log(router);
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col text-white p-12">
      <Header description="Jangan lupa tadarus di sini! Baca quran online, buat gadget anda lebih berfaedah!">
        Awas Lupa Tadarus
      </Header>
      {children}
    </div>
  );
}

export default layout;
