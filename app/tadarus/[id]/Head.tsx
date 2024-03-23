"use client";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const handleRefresh = () => {
  window.location.reload();
};

function HeadSingleSurat({ paramsId }: { paramsId: string }) {
  return (
    <div className="flex  justify-between items-center">
      <button className="sm:px-4 px-3 sm:text-xl h-max py-[.3rem] text-xs sm:py-1 sm:rounded-lg rounded-sm bg-[#111] border-green-800 border-[1.3px]">
        {"Al-fatihah"}
      </button>

      {/* surat sebelumnya */}
      <a
        href={`${Number(paramsId) - 1}`}
        className="sm:text-xl text-sm bg-[#111] flex justify-center items-center border-[1.3px] border-green-800 px-2 sm:rounded-lg rounded-sm"
      >
        <IoArrowBackOutline />
      </a>

      {/* refresh */}
      <button onClick={handleRefresh} className="sm:text-2xl text-sm">
        <IoMdRefresh />
      </button>

      {/*pergi ke Home */}
      <a
        href={"/"}
        className="sm:text-2xl text-sm flex justify-center items-center"
      >
        <MdHome />
      </a>

      {/* surat selanjutnya */}
      <a
        href={`${Number(paramsId) + 1}`}
        className="sm:text-xl text-sm bg-[#111] flex justify-center items-center border-[1.3px] border-green-800 px-2 sm:rounded-lg rounded-sm"
      >
        <IoArrowForwardOutline />
      </a>
      <button className="sm:px-4 px-3 sm:text-xl h-max py-[.3rem] text-xs sm:py-1 sm:rounded-lg rounded-sm bg-[#111] border-green-800 border-[1.3px]">
        An-Nass
      </button>
    </div>
  );
}

export default HeadSingleSurat;
