"use client";
import { ReactNode, useEffect, useState } from "react";
import { getCurrentDate, formatTime } from "@/utils/utils";
import BoxJadwal from "./boxJadwal";
type cityType = {
  id: string;
  lokasi: string;
};

export type scheduleType = Record<string, string>;

function Jadwal() {
  const [city, setCity] = useState<cityType[] | null>(null);
  const [schedule, setSchedule] = useState<null | any>(null);
  const [select, setSelect] = useState<string>("1001");
  const fetchCity = async () => {
    const data = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
    const res = await data.json();
    setCity(res.data);
  };

  const fetcSchedule = async () => {
    const data = await fetch(
      `https://api.myquran.com/v2/sholat/jadwal/${select}/${getCurrentDate()}`
    );
    const res = await data.json();
    setSchedule(res?.data?.jadwal);
  };

  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    fetcSchedule();
  }, [select]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [formatCurrentTime, setFormatCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // mendapatkan timezone
    const timeOfminutes = currentTime.getTimezoneOffset();
    const timeOfHour = Math.floor(timeOfminutes / 60);
    let formatZona = "";
    if (timeOfHour === 7) {
      formatZona = "WIB";
    } else if (timeOfHour === 8) {
      formatZona = "WITA";
    } else if (timeOfHour === 9) {
      formatZona = "WIT";
    } else {
      formatZona = "WIB";
    }

    // format waktu
    const getTime = `UTC${timeOfHour} | ${formatTime(
      currentTime.getSeconds()
    )} : ${currentTime.getMinutes()} : ${formatTime(
      currentTime.getHours()
    )} ${formatZona}`;
    setFormatCurrentTime(getTime);
    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <main className="w-1/2 p-8 flex flex-col items-center text-white">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="font-sans  border-[1px] border-green-600 w-full text-center py-4 font-bold text-4xl bg-secondary rounded-full"
      >
        {formatCurrentTime}
      </div>
      <form
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className=" mt-7 font-bold w-full"
      >
        <label htmlFor="large" className="text-2xl text-start">
          Pilih Wilayah
        </label>
        <select
          id="large"
          onChange={handleSelect}
          value={select}
          className="block outline-none text-primary w-full my-5 px-4 py-3 text-lg optional:font-normal  optional:uppercase text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        >
          <option selected>{city ? city[100].lokasi : "Jakarta"}</option>
          {city?.map((kota) => {
            return (
              <option key={kota.id} value={kota.id}>
                {kota.lokasi}
              </option>
            );
          })}
        </select>
      </form>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1500"
        className="my-1 w-full"
      >
        <div className="w-full flex text-[1.4rem] justify-between">
          <span className="font-semibold">Wilayah : </span>
          <span className="font-semibold">Hari/Tanggal : </span>
        </div>
        <div className="w-full flex text-[1.4rem] justify-between">
          <span className="">Jakarta</span>
          <span className="">Rabu/20/10/2002</span>
        </div>
      </div>
      <BoxJadwal schedule={schedule} />
    </main>
  );
}

export default Jadwal;
