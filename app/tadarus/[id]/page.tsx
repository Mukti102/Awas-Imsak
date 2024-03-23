"use client";
import React, { useEffect, useState } from "react";
import CardAyat from "./CardAyat";
import Main from "./Main";
import Loading from "@/components/ui/Loading/Loading";
import CardBismillah from "./CardBismillah";

type IdProps = {
  params: {
    id: string;
  };
};

export type ayatType = {
  audio: Record<string, string>;
  nomorAyat: number;
  teksArab: string;
  teksIndonesia: string;
  teksLatin: string;
};

function Id({ params }: IdProps) {
  const [singleSurah, setSingleSurah] = useState<null | Record<string, any>>(
    null
  );
  const getDataFetch = async () => {
    try {
      const res = await fetch(`https://equran.id/api/v2/surat/${params.id}`);
      const response = await res.json();
      setSingleSurah(response.data);
    } catch (err) {
      console.log("terjadi kesalahan di ", err);
    }
  };

  useEffect(() => {
    getDataFetch();
  }, []);

  return (
    <>
      {!singleSurah ? (
        <Loading />
      ) : (
        <div>
          <Main singleSurah={singleSurah} />
          <div className="w-full flex flex-col gap-5 mt-10">
            <CardBismillah />
            {singleSurah?.ayat?.map((item: ayatType, index: number) => {
              return <CardAyat item={item} key={index} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Id;
