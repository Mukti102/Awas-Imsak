"use client";

import { HoverEffect } from "@/components/ui/HoverEffect";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "@/components/ui/Loading/Loading";
import Input from "@/components/Input";

export type resepType = {
  difficulty: string;
  time: string;
  title: string;
  "image-src": string;
  "link-href": string;
};

function Resep() {
  const [resep, setResep] = useState<resepType[] | []>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const resepPerPage = 6;
  const [inputChange, setInputChange] = useState("");
  const [inputValue, setInputValue] = useState<string>("");
  const filteredResep = resep.filter((item) =>
    item.title.toLocaleLowerCase().includes(inputValue)
  );
  const fetchResep = async () => {
    try {
      const res = await fetch("https://mahi-api.cyclic.app/makanMalam");
      const data = await res.json();
      setResep(data);
    } catch {
      alert("eror");
    }
  };
  useEffect(() => {
    fetchResep();
  }, []);

  const handleChange = ({ selected }: { selected: number }): void => {
    setCurrentPage(selected);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChange(e.target.value);
  };

  const handleSearch = () => {
    setInputValue(inputChange);
  };

  // menampilkan berdasarkan currentpage
  const indexOfLastResep = (currentPage + 1) * resepPerPage;
  const indexOfFirstResep = indexOfLastResep - resepPerPage;
  const currentResep = filteredResep?.slice(
    indexOfFirstResep,
    indexOfLastResep
  );
  return (
    <>
      {currentResep.length === 0 ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className=" text-white sm:w-full w-screen overflow-hidden flex flex-col items-center  p-10">
          <div className="w-full sm:p-5 p-0">
            <div className="flex items-center gap-2">
              <Input onChange={handleChangeInput}>cari masakan...</Input>
              <button
                onClick={handleSearch}
                className="bg-green-800 font-semibold text-xs sm:text-lg sm:h-full sm:py-3 sm:px-5 px-3  h-max py-2 rounded-sm"
              >
                search
              </button>
            </div>
            <div className="w-full flex flex-wrap">
              <HoverEffect items={currentResep} />
            </div>
          </div>
          <div className="sm:scale-100 scale-[50%]">
            <ReactPaginate
              pageCount={Math.ceil(resep?.length) / resepPerPage}
              pageRangeDisplayed={6}
              // marginPagesDisplayed={1}
              onPageChange={handleChange}
              containerClassName={"flex"}
              activeLinkClassName={"active"}
              previousLabel={<span className="paginateStyle">&#8592;</span>}
              nextLabel={<span className="paginateStyle">&#8594;</span>}
              breakLabel={"..."}
              pageLinkClassName={"paginateStyle"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Resep;
