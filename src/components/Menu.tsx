import { motion } from "motion/react";

const Menu = ({ handleToggleMenu }: { handleToggleMenu: () => void }) => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{ duration: 0.4, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 top-[75px] z-40 flex flex-col items-center gap-y-10 bg-slate-200 py-5 md:hidden"
    >
      <ul className="flex-col items-center space-y-5 md:hidden">
        <li
          onClick={handleToggleMenu}
          className="cursor-pointer border-primary pb-1 capitalize text-primary transition duration-300 hover:border-b-2 hover:text-opacity-75"
        >
          <a href="#tech-stack">Tech Stack</a>
        </li>
        <li
          onClick={handleToggleMenu}
          className="cursor-pointer border-primary pb-1 capitalize text-primary transition duration-300 hover:border-b-2 hover:text-opacity-75"
        >
          <a href="#partners">Partners</a>
        </li>
        <li
          onClick={handleToggleMenu}
          className="cursor-pointer border-primary pb-1 capitalize text-primary transition duration-300 hover:border-b-2 hover:text-opacity-75"
        >
          <a href="#services">Services</a>
        </li>
      </ul>
      <button
        onClick={handleToggleMenu}
        className="rounded-full border border-primary bg-primary px-6 py-2 text-white transition duration-300 hover:bg-transparent hover:text-primary md:block"
      >
        <a href="#contact-us">Contact us</a>
      </button>
    </motion.div>
  );
};

export default Menu;
