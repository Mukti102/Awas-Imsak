import React from "react";
import { IoSearch } from "react-icons/io5";

interface InputProps extends React.ComponentProps<"input"> {
  children: string;
}

function Input(props: InputProps) {
  const { children, ...res } = props;
  return (
    <div className="w-56 py-3 flex items-center  border-green-800 border-[1.5px] rounded-md px-3  bg-[#111]">
      <span className="text-[1.4rem]">
        <IoSearch />
      </span>
      <input
        {...res}
        type="text"
        className="w-full text-lg px-2 outline-none  h-full bg-transparent"
        placeholder={children}
      />
    </div>
  );
}

export default Input;
