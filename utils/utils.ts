const formatDate = (date: number) => {
  return date < 10 ? `0${date}` : date;
};

export const getCurrentDate = () => {
  const date = new Date();
  const tanggal = date.getDate();
  const bulan = date.getMonth();
  const tahun = date.getFullYear();
  return `${tahun}-${formatDate(bulan)}-${formatDate(tanggal)}`;
};

export const formatTime = (e: number): string => {
  return e < 10 ? `0${e}` : e.toString();
};

export const convertToArabicNumber = (nomor: number) => {
  const arabicNumber = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return nomor
    .toString()
    .split("")
    .map((item) => arabicNumber[Number(item)])
    .join("");
};

export const formatCurrentTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export function hitungPersentase(angka: number, total: number) {
  return (angka / total) * 100;
}
