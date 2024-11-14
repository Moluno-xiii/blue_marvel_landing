const ContactUs = () => {
  return (
    <section className="mt-32 bg-black xl:mt-10">
      <div
        id="contact-us"
        className="mx-auto flex max-h-96 max-w-7xl flex-col items-center gap-y-5 px-5 py-10 text-white max-xl:flex-col-reverse lg:gap-y-10 lg:px-10 xl:flex-row xl:justify-center"
      >
        <div className="flex flex-1 flex-col items-center gap-y-2 text-center text-xl md:text-3xl">
          <p className="max-w-lg">
            Want to accelerate software developement at your company?
          </p>
          <span className="text-orange-500">See how we can help.</span>
          <button className="border-primary bg-primary mt-4 rounded-lg px-4 py-2 text-sm transition duration-300 hover:bg-opacity-75 max-sm:self-start">
            Schedule a Call
          </button>
        </div>
        <div className="flex max-h-[300px] flex-1 flex-shrink">
          <img
            src="/partners.avif"
            className="object-contain"
            alt="image of a man smiling"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
