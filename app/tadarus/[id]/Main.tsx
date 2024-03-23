"use client";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { formatCurrentTime } from "@/utils/utils";
import { hitungPersentase } from "@/utils/utils";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

function Main({ singleSurah }: { singleSurah: any }) {
  const [audioSrc, setAudioSrc] = useState(singleSurah.audioFull["05"]);
  const [isPlay, setIsPlay] = useState(true);
  const audioRef = useRef(new Audio(audioSrc));
  const [currentTime, setCurrentTime] = useState(0);
  const persentase = hitungPersentase(currentTime, audioRef.current.duration);
  const styleProgress = {
    background: `linear-gradient(to right,green ${Math.floor(
      persentase
    )}%, white ${persentase}%)`,
  };

  useEffect(() => {
    setAudioSrc(singleSurah.audioFull["05"]);
  }, [singleSurah]);

  const onPlay = () => {
    setIsPlay((play) => !play);
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    audioRef.current.currentTime = Number(e.target.value);
  };

  useEffect(() => {
    const updateProgress = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center mt-5">
      <h1 className="sm:text-2xl text-lg sm:m-3 m-1">{singleSurah?.nama}</h1>
      <span
        className={`${poppins.className} sm:text-6xl text-4xl capitalize gradient-text`}
      >
        {singleSurah?.namaLatin}
      </span>
      <div className="flex sm:mt-3 mt-1 w-[60%] sm:text-base text-xs justify-between">
        <span>{singleSurah?.ayat.length} Ayat</span>
        <span>{singleSurah?.tempatTurun}</span>
      </div>
      <button
        onClick={() => alert("Tafsir is not available yet.")}
        className="sm:w-[80%] w-[80%] bg-[#111] mt-3 py-1.5 border-green-800 border-[1.3px] rounded-full font-bold sm:text-base text-xs text-center"
      >
        Lihat Tafsir
      </button>
      <div className="w-[80%] bg-[#111] mt-3 py-2 border-green-800 border-[1.3px] flex sm:gap-1 gap-2 items-center justify-center rounded-full font-bold text-center">
        <button className="sm:text-base text-xs" onClick={onPlay}>
          {!isPlay ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          value={currentTime}
          max={audioRef.current.duration}
          className="sm:audio-bar audio-bar-mobile"
          style={styleProgress}
          onChange={changeInput}
        />
        <span className="sm:text-xs text-[.6rem] sm:w-20 w-12">
          {formatCurrentTime(currentTime)} :{" "}
          {formatCurrentTime(audioRef.current.duration)}
        </span>
      </div>
    </div>
  );
}

export default Main;
