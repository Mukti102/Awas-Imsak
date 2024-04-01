"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const typeOfWindow = typeof window !== "undefined";
  const router = useRouter();
  useEffect(() => {
    const storage: any = localStorage.getItem("user");
    setUser(JSON.parse(storage));
  }, [typeOfWindow]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("schedule");
    router.push("/");
  };

  return (
    <div className="sm:w-[70%] w-full sm:p-8 p-2 h-full -z-20 mx-auto mt-5">
      <div className="absolute w-32  cursor-pointer sm:right-20 overflow-hidden sm:top-10 right-10 flex justify-center gap-2 top-5 rounded-full">
        <button
          className="font-bold sm:text-base text-xs"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="sm:w-12 overflow-hidden  sm:h-12 w-8 h-8 border-[2px] border-white  rounded-full">
          <Image
            src={
              user?.photo ||
              "https://i.pinimg.com/originals/d6/7f/cb/d67fcb293e7ab5d6fdd92cb9bc639b3b.png"
            }
            alt="profile"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Header
        children="Self Development"
        description="Harus di paksakan dulu lama-lama juga terbiasa"
      />
      {children}
    </div>
  );
}

export default Layout;
