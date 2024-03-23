type cardType = {
  children: React.ReactNode;
  arabic: string;
  latin: string;
  translation: string;
};
function Card({ children, arabic, latin, translation }: cardType) {
  return (
    <div className="w-full sm:px-8 px-4 sm:py-5 py-3 border-[1.2px] border-green-800 rounded-2xl my-5 bg-[#111] flex flex-col justify-center items-center">
      <h2 className="w-full text-center fonnt-semibold sm:text-[1.4rem] text-[.9rem]">
        {children}
      </h2>
      <h2 className="w-full text-end fonnt-bold sm:text-[1.7rem] leading-8 text-[1.2rem] my-5">
        {arabic}
      </h2>
      <p className="sm:text-lg text-xs font-bold w-full">{latin}</p>
      <p className="sm:text-[1.1rem] text-xs sm:my-4 my-2 font-light">
        {translation}
      </p>
    </div>
  );
}

export default Card;
