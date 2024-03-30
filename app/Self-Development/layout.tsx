"use client";
import React from "react";
import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:w-[70%] w-full sm:p-8 p-2 h-full -z-20 mx-auto mt-5">
      <Header
        children="Self Development"
        description="Harus di paksakan dulu lama-lama juga terbiasa"
      />
      {children}
    </div>
  );
}

export default Layout;
