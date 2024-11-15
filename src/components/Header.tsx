import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
  };
  return (
    <nav className="sticky top-0 z-10 bg-[#f6f6f6] shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl flex-row items-center justify-between px-5 md:h-[100px]">
        <div>
          <img src="/logo.svg" alt="blue marvel logo" />
        </div>
        <ul className="hidden flex-row justify-between gap-x-10 md:flex">
          <li className="border-darkBlue text-darkBlue cursor-pointer pb-1 capitalize transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li className="border-darkBlue text-darkBlue cursor-pointer pb-1 capitalize transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#partners">Partners</a>
          </li>
          <li className="border-darkBlue text-darkBlue cursor-pointer pb-1 capitalize transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#services">Services</a>
          </li>
        </ul>
        <button className="border-primary bg-primary hover:text-primary hidden rounded-full border px-6 py-2 text-white transition duration-300 hover:bg-transparent md:block">
          <a href="#contact-us">Contact us</a>
        </button>
        <div
          className="text-primary font-bold md:hidden"
          onClick={handleToggleMenu}
        >
          {!isMenuOpen ? <RxHamburgerMenu /> : <IoClose />}
        </div>

        {isMenuOpen && <Menu handleToggleMenu={handleToggleMenu} />}
      </div>
    </nav>
  );
};

export default Header;
