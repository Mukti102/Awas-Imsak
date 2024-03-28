"use client";
import React from "react";
import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <div className="w-full top-0 bottom-0 overflow-hidden bg-black bg-opacity-45 absolute flex justify-center items-center p-5 z-50">
        <h1 className="font-bold text-center">
          halaman tidak tersedia karena Masih dalam maintance
          <button className="bg-red-500 block w-max mx-auto px-5 py-1 rounded-sm mt-5">
            <Link href={"/"}>Kembali</Link>
          </button>
        </h1>
      </div>
      <div className="sm:w-[70%] w-full p-8 h-full -z-20 mx-auto mt-5">
        <Header
          children="Self Development"
          description="Harus di paksakan dulu lama-lama juga terbiasa"
        />
        {children}
      </div>
    </div>
  );
}

export default Layout;
