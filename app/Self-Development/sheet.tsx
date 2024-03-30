"use client";
import React, { useEffect, useState } from "react";
import { Concert_One } from "next/font/google";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import Loading from "@/components/ui/Loading/Loading";
import { schedulType } from "./types";
import { schedules } from "./schedule";
const madimi = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

function Sheet() {
  const [data, setData] = useState<null | schedulType[]>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<null | schedulType>(null);

  const openModal = (item: schedulType | null) => {
    setIsOpen(true);
    setEditTarget(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addSchedule = (task: string, time: string) => {
    const newSchedule = {
      id: Math.floor(Math.random() * 100),
      status: false,
      task,
      time,
    };
    setData((prev) => [...(prev ?? []), newSchedule]);
  };

  const done = (id: number) => {
    const updatedData: any = data?.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setData(updatedData);
  };

  const updateSchedule = (task: string, time: string, id: number) => {
    const update: any = data?.map((item) => {
      if (item.id === id) {
        return { ...item, task, time };
      } else {
        return item;
      }
    });
    setData(update);
  };

  const removeSchedule = (item: schedulType) => {
    const filter: any = data?.filter((e) => e.id !== item.id);
    setData(filter);
  };

  useEffect(() => {
    setData(schedules);
  }, []);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div
          className={`${madimi.className} sm:w-[70%] w-full m-5 sm:p-5 p-1 bg-white rounded-sm text-[#111]`}
        >
          <h1 className="mx-auto block font-bold sm:text-4xl text-xl w-max">
            Daily Planner
          </h1>
          <table className="w-full mt-3 border-collapse text-left text-gray-700">
            <thead className="">
              <tr className="font-bold">
                <th
                  scope="col"
                  className="px-2 text-center py-3 font-medium sm:text-[1.1rem] text-xs text-black"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="sm:px-6 px-1 sm:text-center  text-start  py-3 font-medium sm:text-[1.1rem] text-xs text-black"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="sm:px-6  px-1   py-3 font-medium text-black sm:text-[1.1rem] text-xs"
                >
                  Schedule
                </th>
                <th
                  scope="col"
                  className="px-6  py-3 text-center sm:text-[1.1rem] text-xs font-medium text-gray-900"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y border-t border-gray-100`}>
              {data?.map((item: schedulType, index: number) => {
                return (
                  <tr key={index}>
                    <td
                      className={`${
                        item?.status ? "line-through text-slate-400" : ""
                      } px-1 sm:text-sm text-xs text-center py-2`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`${
                        item?.status ? "line-through text-slate-400" : ""
                      } sm:px-6 px-1 sm:text-center sm:text-sm text-start text-xs  py-2`}
                    >
                      {item?.time}
                    </td>
                    <td
                      className={`sm:px-6 ${
                        item?.status ? "line-through text-slate-400" : ""
                      } px-1 py-2 sm:text-sm text-xs`}
                    >
                      {item?.task}
                    </td>
                    <td className="flex justify-center text-sm sm:gap-4 gap-2 sm:px-6 px-0 py-2  sm:py-2 font-medium">
                      <input
                        type="checkbox"
                        checked={item?.status}
                        onChange={() => done(item?.id)}
                      />
                      <button
                        onClick={() => openModal(item)}
                        className="text-primary-700 sm:text-base text-xs"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => removeSchedule(item)}
                        className="text-primary-700 sm:text-base text-xs"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal
            update={updateSchedule}
            close={closeModal}
            item={editTarget}
            add={addSchedule}
            isOpen={isOpen}
          />
          <button
            onClick={() => openModal(null)}
            className="ml-2 text-xl rounded-sm w-7 h-7 text-gray-700 border-[1.2px]  border-gray-800 text-center bg-slate-100"
          >
            +
          </button>
        </div>
      )}
    </>
  );
}

export default Sheet;
