"use client";
import AOS from "aos";
import { useEffect } from "react";

type boxJadwalProps = {
  schedule: Record<string, string>;
};

function BoxJadwal({ schedule }: any) {
  const jadwal = [
    "imsak",
    "subuh",
    "terbit",
    "dhuha",
    "dzuhur",
    "ashar",
    "maghrib",
    "isya",
  ];

  return (
    <div className="w-full mt-3 flex-wrap justify-between flex">
      {jadwal?.map((item, index) => {
        return (
          <span
            data-aos="fade-up"
            data-aos-delay={`1${index}00`}
            data-aos-duration="1500"
            key={index}
            className={`sm:w-32 w-[48%] flex flex-col  my-2 py-2 rounded-sm bg-[#111] shadow-md shadow-green-950`}
          >
            <h1 className="sm:text-[1.2rem] text-[1.1rem] capitalize  font-bold p-3">
              {item}
              <br />
              <span className="font-medium sm:text-[1.1rem] text-[1rem]">
                {schedule ? schedule[item] : ""}
              </span>
            </h1>
          </span>
        );
      })}
    </div>
  );
}

export default BoxJadwal;
