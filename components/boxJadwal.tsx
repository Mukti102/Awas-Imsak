"use client";
type boxJadwalProps = {
  schedule: Record<string, string>;
};
function BoxJadwal({ schedule }: any) {
  console.log(schedule);
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
            key={index}
            className={`w-36 flex flex-col  my-2 py-2 rounded-sm bg-[#111] shadow-md shadow-green-950`}
          >
            <h1 className="text-[1.3rem] capitalize  font-bold p-3">
              {item}
              <br />
              <span className="font-semibold text-[1.2rem]">
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
