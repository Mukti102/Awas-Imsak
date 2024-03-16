"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoBook } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { resepType } from "@/app/resep/page";
export const HoverEffect = ({
  items,
  className,
}: {
  items: resepType[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items?.map((item: any, idx: number) => (
        <Link
          href={"/"}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle item={item} />
            <CardDescription>{item?.title}</CardDescription>
            <CardIcon item={item} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[450px] flex-1 p-2  overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  item,
}: {
  item: resepType;
  className?: string;
}) => {
  return (
    <div className="w-full group bg-red-300 overflow-hidden h-52 rounded-lg">
      <Image
        src={item["image-src"]}
        alt="image"
        width={100}
        height={100}
        className="w-full group-hover:saturate-0 h-full object-cover"
      />
    </div>
  );
};

export const CardIcon = ({ item }: { item: resepType }) => {
  return (
    <div className="w-full  bottom-0 mt-5 flex justify-between">
      <button className="w-max rounded-full border-green-900 border-[1.8px] px-3 py-2 font-medium flex items-center gap-2">
        <span>
          <FaClock />
        </span>
        {item?.time}
      </button>
      <button className="w-max rounded-full border-green-900 border-[1.8px] px-3 py-2 font-medium">
        {item.difficulty ? item.difficulty : "-"}
      </button>
      <button className="w-max rounded-full border-green-900 border-[1.8px] px-3 py-2 font-medium">
        <Link href={item["link-href"]} className="text-xl">
          <IoBook />
        </Link>
      </button>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 h-24  text-center text-zinc-100  font-semibold tracking-wide text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
