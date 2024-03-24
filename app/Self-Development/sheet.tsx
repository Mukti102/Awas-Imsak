import React from "react";
import { Concert_One } from "next/font/google";
import { FaEdit } from "react-icons/fa";
import { schedules } from "./schedule";

const madimi = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

function Sheet() {
  return (
    <div
      className={`${madimi.className} sm:w-[60%] w-full m-5 p-5 bg-white rounded-sm text-[#111]`}
    >
      <h1 className="mx-auto block font-bold sm:text-4xl text-2xl w-max">
        Daily Planner
      </h1>
      <table className="w-full mt-3 border-collapse text-left  text-gray-700">
        <thead className="">
          <tr className="font-bold">
            <th
              scope="col"
              className="px-2 text-center py-3 font-medium sm:text-[1.1rem] text-sm text-black"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6  py-3 font-medium sm:text-[1.1rem] text-sm text-black"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6  py-3 font-medium text-black sm:text-[1.1rem] text-sm"
            >
              Schedule
            </th>
            <th
              scope="col"
              className="px-6  py-3 text-center sm:text-[1.1rem] text-sm font-medium text-gray-900"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className={`divide-y border-t border-gray-100`}>
          {schedules.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-1 sm:text-sm text-xs text-center py-2">
                  {index + 1}
                </td>
                <td className="px-6 sm:text-sm text-xs  py-2">{item?.time}</td>
                <td className="sm:px-6 px-1 py-2 sm:text-sm text-xs">
                  {item?.task}
                </td>
                <td className="flex justify-center text-sm gap-4 px-6 py-2 font-medium">
                  <input type="checkbox" />
                  <a href="" className="text-primary-700">
                    <FaEdit />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Sheet;
