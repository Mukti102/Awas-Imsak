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
