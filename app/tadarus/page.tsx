import React from "react";
import Tadarus from "./Tadarus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baca Quran Online",
  description:
    "Jangan lupa tadarus di sini! Baca quran online, buat gadget anda lebih berfaedah!",
};

function page() {
  return <Tadarus />;
}

export default page;
