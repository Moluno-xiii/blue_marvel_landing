const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col justify-center space-y-5 px-10 py-10">
        <div className="flex flex-col items-center gap-y-7 border-b border-black border-opacity-40 pb-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-10 max-md:items-center">
            <div>
              <img src="/logo.svg" alt="blue marvel logo" />
            </div>
            <span className="max-w-sm text-white text-opacity-80">
              Empowering your business with innovation, strategic investment,
              and expert management.
            </span>
          </div>
          <ul className="flex flex-col items-center gap-x-14 font-semibold text-white text-opacity-80 lg:flex-row">
            <li className="border-orange-500 p-2 duration-100 hover:border-b-2">
              <a href="#services">Services</a>
            </li>
            <li className="border-orange-500 p-2 duration-100 hover:border-b-2">
              <a href="#partners">Partners</a>
            </li>
            <li className="border-orange-500 p-2 duration-100 hover:border-b-2">
              <a href="#tech-stack">Tech Stack</a>
            </li>
            <li className="border-orange-500 p-2 duration-100 hover:border-b-2">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <span className="self-center text-center text-white text-opacity-65">
          &copy; {date.getFullYear()} Blue Marvel Technologies. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
