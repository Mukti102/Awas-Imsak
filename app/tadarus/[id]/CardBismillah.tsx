import { Amiri } from "next/font/google";
import { FaPlay, FaPause } from "react-icons/fa";
import { ayatType } from "./page";
import { convertToArabicNumber } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";

const arab = Amiri({
  weight: "400",
  subsets: ["arabic"],
});

function CardBismillah() {
  const [item, setItem] = useState<any | null>(null);

  const fetchData = async () => {
    const data = await fetch("https://equran.id/api/v2/surat/1");
    const res = await data.json();
    setItem(res.data?.ayat);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full sm:pt-5  pt-4 bg-[#111] border-green-900 border-[1.6px] rounded-2xl text-center">
      <div className="flex flex-col justify-end relative p-4">
        <div className="w-full text-center flex justify-center">
          <span
            className={` ${arab.className} text-center sm:leading-[4rem] leading-[2.7rem] w-[80%] sm:text-[1.5rem] text-[1.1rem]  `}
          >
            {item ? item[0].teksArab : null}
          </span>
        </div>
        <div className="sm:mt-3 mt-1 w-full text-start flex flex-col gap-2 px-5">
          <h2 className="sm:text-xs text-xs text-center">
            {item ? item[0].teksIndonesia : null}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardBismillah;
