import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { schedulType } from "./types";

type modalType = {
  close: () => void;
  isOpen: boolean;
  item: null | schedulType;
  update: (task: string, time: string, id: any) => void;
  add: (task: string, time: string) => void;
};

const Modal = ({ close, isOpen, item, update, add }: modalType) => {
  const [taskValue, setTaskValue] = useState<any | null>(null);
  const [timeValue, setTimeValue] = useState<any | null>(null);

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeValue(e.target.value);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      update(taskValue, timeValue, item?.id);
    } else {
      add(taskValue, timeValue);
    }
    setTaskValue("");
    setTimeValue("");
    close();
  };

  useEffect(() => {
    setTaskValue(item?.task);
    setTimeValue(item?.time);
  }, [item]);

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 z-0 bg-gray-900 opacity-50 transition-opacity"></div>
          <div className="relative w-auto max-w-lg mx-auto my-6">
            <div className="bg-white relative px-8 py-5 rounded shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Edit Task</h3>
              </div>
              <form onSubmit={submit} className="flex flex-col w-80">
                <label htmlFor="time">Time</label>
                <input
                  type="text"
                  id="time"
                  value={timeValue}
                  onChange={handleChangeTime}
                  placeholder="00:00"
                  className="border-[1.5px] rounded-md outline-none px-2  py-1 border-gray-800 focus:border-[2px] focus:border-green-800"
                />
                <label htmlFor="task" className="mt-2">
                  Task
                </label>
                <input
                  type="text"
                  id="task"
                  value={taskValue}
                  onChange={handleChangeTask}
                  placeholder="Studying..."
                  className="border-[1.5px] rounded-md outline-none px-2  py-1 border-gray-800 focus:border-[2px] focus:border-green-800"
                />
                <div className="mt-3 w-full  flex justify-end">
                  <div className="flex gap-2">
                    <button
                      onClick={close}
                      className="px-4 bg-red-500 py-1 text-lg  rounded-sm text-white"
                    >
                      close
                    </button>
                    <button className="px-4 bg-green-700 py-1 text-lg  rounded-sm text-white">
                      save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
