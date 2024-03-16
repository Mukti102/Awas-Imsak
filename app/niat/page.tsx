import Button from "@/components/Button";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awas Lupa Niat",
  description: "Awas Jangan sampai lupa niat",
};

function Niat() {
  return (
    <div className="w-full text-white  flex flex-col p-10 items-center">
      <Header description="Awas Jangan sampai Lupa Niat!">
        Awas Lupa Niat
      </Header>
      <div className="w-[60%]">
        <div className="w-full px-8 py-5 border-[1.2px] border-green-800 rounded-2xl my-5 bg-[#111] flex flex-col justify-center items-center">
          <h2 className="w-full text-center fonnt-semibold text-[1.4rem]">
            Niat Puasa Ramadhan untuk Sehari:
          </h2>
          <h2 className="w-full text-end fonnt-bold text-[1.7rem] my-5">
            نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ
            السَّنَةِ لِلّٰهِ تَعَالَى
          </h2>
          <p className="text-lg font-bold w-full">
            Nawaitu shauma ghadin 'an ada'i fardhi syahri Ramadhana hadzihis
            sanati lillahi ta'ala.
          </p>
          <p className="text-[1.1rem] my-4 font-light">
            Artinya: “Aku niat berpuasa esok hari untuk menunaikan kewajiban
            puasa bulan Ramadhan tahun ini, karena Allah Ta'ala.”
          </p>
        </div>
        <div className="w-full px-8 py-5 border-[1.2px] border-green-800 rounded-2xl my-5 bg-[#111] flex flex-col justify-center items-center">
          <h2 className="w-full text-center fonnt-semibold text-[1.4rem]">
            Niat Puasa Ramadhan untuk Sebulan Penuh:
          </h2>
          <h2 className="w-full text-end fonnt-bold text-[1.7rem] my-5">
            نَنَوَيْتُ صَوْمَ جَمِيْعِ شَهْرِ رَمَضَانِ هٰذِهِ السَّنَةِ فَرْضًا
            لِلّٰهِ تَعَالَى
          </h2>
          <p className="text-lg font-bold w-full">
            Nawaitu shauma jami'i syahri Ramadhani hadzihis sanati fardhan
            lillahi ta'ala.
          </p>
          <p className="text-[1.1rem] my-4 font-light">
            Artinya: “Aku niat berpuasa di sepanjang bulan Ramadhan tahun ini
            dengan mengikuti pendapat Imam Malik, wajnpm run dib karena Allah
            Ta'ala.”
          </p>
        </div>
        <div className="w-full px-8 py-5 border-[1.2px] border-green-800 rounded-2xl my-5 bg-[#111] flex flex-col justify-center items-center">
          <h2 className="w-full text-center fonnt-semibold text-[1.4rem]">
            Doa Buka Puasa:
          </h2>
          <h2 className="w-full text-end fonnt-bold text-[1.7rem] my-5">
            نَنَوَيْتُ صَوْمَ جَمِيْعِ شَهْرِ رَمَضَانِ هٰذِهِ السَّنَةِ فَرْضًا
            لِلّٰهِ تَعَالَى
          </h2>
          <p className="text-lg font-bold w-full">
            Nawaitu shauma jami'i syahri Ramadhani hadzihis sanati fardhan
            lillahi ta'ala.
          </p>
          <p className="text-[1.1rem] my-4 font-light">
            Artinya: “Aku niat berpuasa di sepanjang bulan Ramadhan tahun ini
            dengan mengikuti pendapat Imam Malik, wajib karena Allah Ta'ala.”
          </p>
        </div>
        <div className="flex justify-between w-full">
          <Button href="/tadarus">Awas Lupa Tadarus</Button>
          <Button href="/resep">Awas Lupa Buka</Button>
        </div>
      </div>
    </div>
  );
}

export default Niat;
