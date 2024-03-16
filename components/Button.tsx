import Link from "next/link";
import { Interface } from "readline";

interface baseButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  href: string;
}

function Button(props: baseButtonProps) {
  const { children, href, ...res } = props;
  return (
    <Link href={href} className="">
      <button
        {...res}
        className="flex-1 hover:bg-green-900 py-2 px-7 text-lg rounded-full border-[1px] border-green-600"
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
