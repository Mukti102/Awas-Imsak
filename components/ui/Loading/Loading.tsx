import { useState } from "react";
import "./loading.css";
function Loading() {
  const [isReady, setIsReady] = useState(false);

  setTimeout(() => {
    setIsReady(true);
  }, 3000);

  return (
    <div className="flex loader flex-col  justify-center items-center gap-3">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      {isReady && (
        <h1 className="w-[300px] sm:text-base text-xs mt-32 text-center">
          Sabar ya.. Kan Lagi puasa....😊
        </h1>
      )}
    </div>
  );
}

export default Loading;
