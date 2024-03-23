import { Amiri } from "next/font/google";
import { FaPlay, FaPause } from "react-icons/fa";
import { ayatType } from "./page";
import { convertToArabicNumber } from "@/utils/utils";
import { useRef, useState } from "react";

const arab = Amiri({
  weight: "400",
  subsets: ["arabic"],
});

function CardAyat({ item }: { item: ayatType }) {
  const audio = useRef(new Audio(item.audio["05"]));
  const [isPlay, setIsPlay] = useState(true);
  const onPlay = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  audio.current.onended = () => {
    setIsPlay(true);
  };

  return (
    <div className="w-full sm:pt-5 pt-4 bg-[#111] border-green-900 border-[1.6px] rounded-2xl text-center">
      <div className="flex flex-col justify-end relative p-4">
        <span className="sm:w-10 w-7 text-center -top-1 absolute flex items-center justify-center sm:h-10 h-7 text-xs sm:text-base border-green-800 font-bold pt-1 border-[1px] rounded-full">
          {convertToArabicNumber(item?.nomorAyat)}
        </span>
        <div className="w-full flex justify-end">
          <span
            className={` ${arab.className} sm:leading-[4rem] leading-[2.7rem] w-[80%] sm:text-[1.4rem] text-[1.1rem] text-end `}
          >
            {item?.teksArab}
          </span>
        </div>
        <div className="sm:mt-3 mt-1 w-full text-start flex flex-col gap-2 px-5">
          <h1 className="font-bold text-xs sm:text-[1.1rem]">
            {item?.teksLatin}
          </h1>
          <h2 className="sm:text-sm text-xs">{item?.teksIndonesia}</h2>
        </div>
        <div className="w-full flex justify-end px-1">
          <button
            onClick={onPlay}
            className="sm:w-10 w-6 flex justify-center items-center rounded-full sm:h-10 h-6 sm:text-base text-[.6rem]  border-green-800 border-[1px]"
          >
            {!isPlay ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardAyat;
