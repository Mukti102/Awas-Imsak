"use client";
import React from "react";
import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  const storage: any = localStorage.getItem("user");
  const user = JSON.parse(storage);

  return (
    <div className="sm:w-[70%] w-full sm:p-8 p-2 h-full -z-20 mx-auto mt-5">
      <div className="absolute cursor-pointer sm:right-20 overflow-hidden sm:top-10 sm:w-12 sm:h-12 w-10 h-10 border-[2px] border-white right-10 top-5 rounded-full">
        <Image src={user?.photo} alt="profile" width={100} height={100} />
      </div>
      <Header
        children="Self Development"
        description="Harus di paksakan dulu lama-lama juga terbiasa"
      />
      {children}
    </div>
  );
}

export default Layout;
