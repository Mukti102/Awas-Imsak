import { Poppins } from "next/font/google";
import HeadSingleSurat from "./Head";
import { Metadata } from "next";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baca Quran Online",
  description:
    "Jangan lupa tadarus di sini! Baca quran online, buat gadget anda lebih berfaedah!",
};

function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div
      className={`${poppins.className} sm:w-1/2 w-full  sm:py-0  py-1 sm:h-screen h-full`}
    >
      <HeadSingleSurat paramsId={params?.id} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
