import Button from "./Button";
interface HeaderProps extends React.ComponentProps<"div"> {
  children: string;
  description: string;
}

function Header(props: HeaderProps) {
  const { children, description, ...res } = props;
  return (
    <div {...res}>
      <Button href="/">Back to Home</Button>
      <h1 className="btn gradient-text text-center font-bold text-[4.6rem]">
        {children}
      </h1>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
}

export default Header;
