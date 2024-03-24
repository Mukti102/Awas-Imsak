import Resep from "./Resep";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resep Buka Puasa",
  description: "Jangan lupa masak,!",
};

function Page() {
  return <Resep />;
}

export default Page;
