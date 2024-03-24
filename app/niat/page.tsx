// "use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { Metadata } from "next";
import Card from "./Card";

export const metadata: Metadata = {
  title: "Niat Puasa ",
  description: "Awas Jangan sampai lupa niat",
};

function Niat() {
  return (
    <div className="w-full text-white  flex flex-col sm:p-10 p-8 items-center">
      <Header description="Awas Jangan sampai Lupa Niat!">
        Awas Lupa Niat
      </Header>
      <div className="sm:w-[60%] w-full">
        <Card
          arabic="نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ
        السَّنَةِ لِلّٰهِ تَعَالَى"
          latin="Nawaitu shauma ghadin 'an ada'i fardhi syahri Ramadhana hadzihis sanati
        lillahi ta'ala."
          translation=" Artinya: “Aku niat berpuasa esok hari untuk menunaikan kewajiban puasa
        bulan Ramadhan tahun ini, karena Allah Ta'ala.”"
        >
          Niat Puasa Ramadhan untuk Sehari:
        </Card>
        <Card
          translation="Artinya: “Aku niat berpuasa di sepanjang bulan Ramadhan tahun ini
            dengan mengikuti pendapat Imam Malik, wajib karena Allah Ta'ala.”"
          latin="Nawaitu shauma jami'i syahri Ramadhani hadzihis sanati fardhan
            lillahi ta'ala."
          arabic="    نَنَوَيْتُ صَوْمَ جَمِيْعِ شَهْرِ رَمَضَانِ هٰذِهِ السَّنَةِ فَرْضًا
            لِلّٰهِ تَعَالَى"
        >
          Niat Puasa Ramadhan untuk Sebulan Penuh:
        </Card>
      </div>
    </div>
  );
}

export default Niat;
