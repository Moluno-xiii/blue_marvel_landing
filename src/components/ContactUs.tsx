const ContactUs = () => {
  return (
    <div className="grid h-[410px] grid-cols-1 items-center bg-black px-5 text-white lg:grid-cols-2 lg:px-10">
      <div className="flex flex-col gap-y-2 text-4xl">
        <p className="max-w-lg">
          Want to accelerate software developement at your company?
        </p>
        <span className="text-orange-500">See how we can help.</span>
        <button className="bg-secondary border-secondary mt-4 self-start rounded-lg p-4 text-base transition duration-300 hover:bg-transparent">
          Schedule a Call
        </button>
      </div>
      <div>
        <img src="/partners.avif" alt="image of a man smiling" />
      </div>
    </div>
  );
};

export default ContactUs;
