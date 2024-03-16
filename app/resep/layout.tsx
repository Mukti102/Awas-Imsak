import Header from "@/components/Header";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white w-full flex flex-col justify-center min-h-max items-center p-10">
      <Header description="Masak udah puasa tapi gak buka karena gak masak">
        Awas Lupa Masak
      </Header>
      {children}
    </div>
  );
}

export default layout;
