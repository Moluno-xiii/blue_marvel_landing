const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="mt-32 flex max-h-96 flex-col items-center gap-y-5 bg-black px-5 py-10 text-white max-xl:flex-col-reverse lg:gap-y-10 lg:px-10 xl:mt-10 xl:flex-row"
    >
      <div className="flex flex-col gap-y-2 text-xl md:text-3xl">
        <p className="max-w-lg">
          Want to accelerate software developement at your company?
        </p>
        <span className="text-orange-500">See how we can help.</span>
        <button className="mt-4 self-start rounded-lg border-secondary bg-secondary px-4 py-2 text-sm transition duration-300 hover:bg-opacity-75">
          Schedule a Call
        </button>
      </div>
      <div className="flex- flex max-h-[300px] flex-shrink">
        <img
          src="/partners.avif"
          className="object-contain"
          alt="image of a man smiling"
        />
      </div>
    </div>
  );
};

export default ContactUs;
