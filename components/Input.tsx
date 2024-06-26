import React from "react";
import { IoSearch } from "react-icons/io5";

interface InputProps extends React.ComponentProps<"input"> {
  children: string;
}

function Input(props: InputProps) {
  const { children, ...res } = props;
  return (
    <div className="flex gap-1 items-center">
      <div className="sm:w-56 w-40 sm:py-3 py-1 flex items-center  border-green-800 border-[1.5px] rounded-md px-3  bg-[#111]">
        <span className="sm:text-[1.4rem] text-sm">
          <IoSearch />
        </span>
        <input
          {...res}
          type="text"
          className="w-full sm:text-lg  text-sm px-2 outline-none  h-full bg-transparent"
          placeholder={children}
        />
      </div>
    </div>
  );
}

export default Input;
