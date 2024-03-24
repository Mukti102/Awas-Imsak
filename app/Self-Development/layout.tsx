import React from "react";
import Header from "@/components/Header";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:w-[70%] w-full p-8  mx-auto mt-5">
      <Header
        children="Self Development"
        description="Harus di paksakan dulu lama-lama juga terbiasa"
      />
      {children}
    </div>
  );
}

export default Layout;
