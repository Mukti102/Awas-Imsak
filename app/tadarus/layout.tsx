"use client";
import Header from "@/components/Header";
import { Metadata } from "next";
import { usePathname } from "next/navigation";

function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center items-center flex-col text-white sm:p-10 p-5">
      {pathname !== "/tadarus" ? null : (
        <Header description="Jangan lupa tadarus di sini! Baca quran online, buat gadget anda lebih berfaedah!">
          Awas Lupa Tadarus
        </Header>
      )}
      {children}
    </div>
  );
}

export default layout;
