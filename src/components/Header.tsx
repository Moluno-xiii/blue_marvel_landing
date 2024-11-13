const Header = () => {
  return (
    <nav className="sticky top-0 z-10 hidden h-28 flex-row items-center justify-between bg-[#f6f6f6] px-5 md:flex">
      <div>
        <img src="/logo.svg" alt="blue marvel logo" />
      </div>
      <ul className="flex flex-row justify-between gap-x-10">
        <li className="text-secondary cursor-pointer capitalize transition duration-300 hover:text-opacity-75 hover:underline">
          Tech Stack
        </li>
        <li className="text-secondary cursor-pointer capitalize transition duration-300 hover:text-opacity-75 hover:underline">
          Partners
        </li>
        <li className="text-secondary cursor-pointer capitalize transition duration-300 hover:text-opacity-75 hover:underline">
          Services
        </li>
      </ul>
      <button className="bg-secondary border-secondary hover:text-secondary rounded-full border px-6 py-2 text-white transition duration-300 hover:bg-transparent">
        Contact us
      </button>
    </nav>
  );
};

export default Header;
