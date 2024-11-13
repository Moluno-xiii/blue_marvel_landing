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
    <nav className="sticky top-0 z-10 flex h-[100px] flex-row items-center justify-between bg-[#f6f6f6] px-5">
      <div>
        <img src="/logo.svg" alt="blue marvel logo" />
      </div>
      <ul className="hidden flex-row justify-between gap-x-10 md:flex">
        <li className="cursor-pointer border-secondary pb-1 capitalize text-secondary transition duration-300 hover:border-b-2 hover:text-opacity-75">
          <a href="#tech-stack">Tech Stack</a>
        </li>
        <li className="cursor-pointer border-secondary pb-1 capitalize text-secondary transition duration-300 hover:border-b-2 hover:text-opacity-75">
          <a href="#partners">Partners</a>
        </li>
        <li className="cursor-pointer border-secondary pb-1 capitalize text-secondary transition duration-300 hover:border-b-2 hover:text-opacity-75">
          <a href="#services">Services</a>
        </li>
      </ul>
      <button className="hidden rounded-full border border-secondary bg-secondary px-6 py-2 text-white transition duration-300 hover:bg-transparent hover:text-secondary md:block">
        <a href="#contact-us">Contact us</a>
      </button>
      <div className="md:hidden" onClick={handleToggleMenu}>
        {!isMenuOpen ? <RxHamburgerMenu /> : <IoClose />}
      </div>

      {isMenuOpen && <Menu handleToggleMenu={handleToggleMenu} />}
    </nav>
  );
};

export default Header;
