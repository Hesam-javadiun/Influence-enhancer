import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = function ({ children }: HeaderProps) {
  return (
    <header className="bg-sky-300">
      <div className="max-w-300 flex flex-col gap-4 justify-evenly w-full  m-auto p-4 items-center bg-lime-300">
        <h1>Improve Your Social Media Influence</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          eligendi.
        </p>
        <ul className="flex gap-2 flex-wrap justify-center">{children}</ul>
      </div>
    </header>
  );
};

export default Header;
