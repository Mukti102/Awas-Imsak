import Header from "@/components/Header";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { IoSearch } from "react-icons/io5";
import { ChangeEvent, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "@/components/ui/Loading/Loading";

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

  const handleChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
        <Loading />
      ) : (
        <div className=" text-white w-full flex flex-col items-center p-10">
          <div className="w-[100%] p-5">
            <div className="w-56 py-3 flex items-center  border-green-800 border-[1.5px] rounded-md px-3  bg-[#111]">
              <span className="text-[1.4rem]">
                <IoSearch />
              </span>
              <input
                onChange={handleChangeInput}
                type="text"
                className="w-full text-lg px-2 outline-none  h-full bg-transparent"
                placeholder="cari masakan..."
              />
            </div>
            <div className="w-full flex flex-wrap">
              <HoverEffect items={currentResep} />
            </div>
          </div>
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
      )}
    </>
  );
}

export default Resep;
