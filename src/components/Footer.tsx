const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-secondary flex h-[330px] flex-col justify-center space-y-5 px-10">
      <div className="flex flex-row justify-between border-b border-black pb-10">
        <div className="flex flex-col gap-y-10">
          <div>
            <img src="/logo.svg" alt="blue marvel logo" />
          </div>
          <span className="max-w-sm text-[#A7A18C]">
            Empowering your business with innovation, strategic investment, and
            expert management.
          </span>
        </div>
        <ul className="flex flex-row items-center gap-x-14 font-semibold text-white">
          <li>Services</li>
          <li>About Us</li>
          <li>Our Works</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <span className="self-center">
        &copy; {date.getFullYear()} Blue Marvel Technologies. All rights
        reserved.
      </span>
    </footer>
  );
};

export default Footer;
