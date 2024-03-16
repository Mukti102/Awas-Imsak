import Button from "./Button";
import { IoArrowBack } from "react-icons/io5";
interface HeaderProps extends React.ComponentProps<"div"> {
  children: string;
  description: string;
}

function Header(props: HeaderProps) {
  const { children, description, ...res } = props;
  return (
    <div {...res}>
      <Button href="/">
        <span className="text-[1.5rem] font-bold">
          <IoArrowBack />
        </span>
        Back to Home
      </Button>
      <h1 className="btn gradient-text text-center font-bold text-[4.6rem]">
        {children}
      </h1>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
}

export default Header;
