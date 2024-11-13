const TechStack = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-y-20">
      <div className="flex flex-col items-center gap-y-7">
        <p className="text-[40px] font-bold">
          Yes. We cover your tech stack{" "}
          <span className="text-orange-500">.</span>
        </p>
        <span className="mx-auto max-w-[530px] text-center text-xl">
          Our 4,000+ tem has expertise in almost every programming language.
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-7">
        <div>slider div</div>
        <button className="border-b-2 border-black">Our full repertoire</button>
      </div>
    </div>
  );
};

export default TechStack;
