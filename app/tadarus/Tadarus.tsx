"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Noto_Naskh_Arabic } from "next/font/google";
import ReactPaginate from "react-paginate";
import Input from "@/components/Input";
import Loading from "@/components/ui/Loading/Loading";
import Link from "next/link";
import "dotenv/config";

const Arab = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});

function Tadarus() {
  const [surat, setSurat] = useState<Record<string, any>[] | []>([]);
  const suratPerPage = 8;
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(0);
  const filterSurat = surat.filter((item) => item?.namaLatin);

  const ambilData = async () => {
    const res = await fetch(`https://equran.id/api/v2/surat`);
    const data = await res.json();
    setSurat(data.data);
  };

  useEffect(() => {
    ambilData();
  }, []);
  // menampilkan berdasrkan selected
  const indexOfLastSurat = (selected + 1) * suratPerPage;
  const indexOfFirstSurat = indexOfLastSurat - suratPerPage;
  const currentSurat = filterSurat.slice(indexOfFirstSurat, indexOfLastSurat);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChange = ({ selected }: { selected: number }) => {
    setSelected(selected);
  };

  return (
    <div className="mt-14">
      {surat.length === 0 ? (
        <div className="relative">
          <Loading />
        </div>
      ) : (
        <div className="w-full max-h-screen">
          <div className="w-full">
            <Input onChange={handleInputChange}>Cari Surat...</Input>
            <div className="w-full mt-10 flex justify-between flex-wrap gap-2">
              {currentSurat?.map((item, index) => {
                return (
                  <Link
                    href={`/tadarus/${item.nomor}`}
                    key={index}
                    className="w-72  h-[6rem] bg-[#111] border-[1.2px] border-green-800 rounded-lg mt-2 p-3 flex flex-col justify-center gap-1"
                  >
                    <div className="flex pr-1 justify-between">
                      <h1 className="font-bold text-[1.2rem]">
                        {item?.namaLatin}
                      </h1>
                      <span className={Arab.className}>{item?.nama}</span>
                    </div>
                    <h2>{item?.arti}</h2>
                  </Link>
                );
              })}
            </div>
            <div className="w-full mt-10 justify-center flex">
              <ReactPaginate
                pageCount={Math.ceil(surat?.length) / suratPerPage}
                // pageRangeDisplayed={6}
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
        </div>
      )}
    </div>
  );
}
export default Tadarus;
