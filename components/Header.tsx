import Button from "./Button";
import { IoArrowBack } from "react-icons/io5";
import { Poppins } from "next/font/google";

interface HeaderProps extends React.ComponentProps<"div"> {
  children: string;
  description: string;
}

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

function Header(props: HeaderProps) {
  const { children, description, ...res } = props;
  return (
    <header {...res}>
      <div className="scale-90">
        <Button href="/">
          <span className="sm:text-[1.5rem] text-sm font-bold">
            <IoArrowBack />
          </span>
          Back to Home
        </Button>
      </div>
      <h1
        className={`${poppins.className}  gradient-text text-center font-bold sm:text-[4.6rem] text-[1.8rem]`}
      >
        {children}
      </h1>
      <p className="text-center sm:text-lg text-[.7rem] sm:w-full">
        {description}
      </p>
    </header>
  );
}

export default Header;
