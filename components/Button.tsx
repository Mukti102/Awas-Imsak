import Link from "next/link";

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
        className="flex-1 flex items-center gap-2 hover:bg-green-900 py-2 sm:px-6 sm:text-[.9rem] text-xs px-4 mb-2 rounded-full border-[1px] border-green-600"
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
