import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import AuthProvider from "./SessionProvider";
const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awas Imsak! hadir untuk anda yang sahur di jam 12 siang",
  description:
    'Dari Abu Hurairah RA berkata, Rasulullah SAW bersabda: "Siapa berpuasa di bulan Ramadan dengan dilandasi iman dan ikhlas mengharap ridha Allah,maka diampuni dosanya yang lalu," (HR Al-Bukhari)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#0c1a05]   text-white bg-grid-white/[0.1]`}
      >
        <StoreProvider>
          <AuthProvider>{children}</AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
