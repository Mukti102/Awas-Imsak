"use client";
import { useEffect, useState } from "react";
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
  const [select, setSelect] = useState<string>("1622");
  const [cityName, setCityName] = useState<string>("Jakarta"); // Default to "Jakarta"

  const fetchCity = async () => {
    const data = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
    const res = await data.json();
    setCity(res.data);
  };

  const fetchSchedule = async () => {
    const data = await fetch(
      `https://api.myquran.com/v2/sholat/jadwal/${select}/${getCurrentDate()}`
    );
    const res = await data.json();
    setSchedule(res?.data?.jadwal);
  };

  const handleSelect = (e: any) => {
    const selectedId = e.target.value;
    setSelect(selectedId);
    const selectedCity = city?.find((kota) => kota.id === selectedId);
    setCityName(selectedCity ? selectedCity.lokasi : ""); // Update cityName
  };

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, [select]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [formatCurrentTime, setFormatCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Mendapatkan timezone
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

    // Format waktu
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

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    var yyyy = today.getFullYear();

    const current: any = mm + "/" + dd + "/" + yyyy;
    return current;
  };

  return (
    <main className="sm:w-1/2 w-full p-8 flex flex-col items-center text-white">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="font-sans border-[1px] border-green-600 w-full text-center sm:py-3 py-2 font-bold sm:text-3xl text-xl bg-secondary rounded-full"
      >
        {formatCurrentTime}
      </div>
      <form
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="mt-7 font-bold w-full"
      >
        <label
          htmlFor="large"
          className="sm:text-2xl text-xl font-semibold text-start"
        >
          Pilih Wilayah
        </label>
        <select
          id="large"
          onChange={handleSelect}
          value={select}
          className="block outline-none text-primary w-full sm:my-5 my-3 sm:px-4 px-3 sm:py-3 py-1 sm:text-lg text-[1rem] optional:font-normal optional:uppercase text-gray-900 border border-gray-300 sm:rounded-lg rounded-md bg-gray-50"
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
        <div className="w-full flex sm:text-[1.4rem] text-[1.1rem] justify-between">
          <span className="font-semibold">Wilayah : </span>
          <span className="font-semibold">Hari/Tanggal : </span>
        </div>
        <div className="w-full flex mt-1 sm:text-[1.4rem] text-[1.1rem] justify-between">
          <span className="">{cityName}</span>
          <span className="">{getDate()}</span>
        </div>
      </div>
      <BoxJadwal schedule={schedule} />
    </main>
  );
}

export default Jadwal;
