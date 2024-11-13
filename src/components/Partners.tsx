const Partners = () => {
  return (
    <div className="flex flex-col px-5 lg:px-10">
      <div className="flex flex-row">
        <div className="w-[500px] bg-blue-400"></div>
        <div className="flex flex-1 flex-col justify-center gap-y-7 px-10">
          <p>We've stopped counting. Over 500 brands count on us.</p>
          <span className="text-gray-400">
            1,200+ projects executed successfully and an average relationship of
            over 3 years.
          </span>
          <button className="mt-5 self-start border-b-2 border-black p-2">
            Our greatest hits
          </button>
        </div>
      </div>
      <div className="h-[450px] bg-teal-300"></div>
    </div>
  );
};

export default Partners;
