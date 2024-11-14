import { HiOutlineArrowLongRight } from "react-icons/hi2";
const techStack = [
  "react",
  ".net",
  "python",
  "c#",
  "rails",
  "node.js",
  "java",
  "javascript",
  "swift",
  "angular",
  "php",
  "android",
  "ios",
  "golang",
  "vue.js",
  "c++",
];
const TechStack = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div
        id="tech-stack"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-7 px-5 py-14 sm:gap-y-14"
      >
        <div className="flex flex-col items-center gap-y-7">
          <p className="text-2xl font-bold md:text-[40px]">
            Yes. We cover your tech stack{" "}
            <span className="text-orange-500">.</span>
          </p>
          <span className="mx-auto max-w-[530px] text-center text-base md:text-xl">
            Our 4,000+ tem has expertise in almost every programming language.
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-7">
          <ul className="flex flex-row flex-wrap justify-center gap-x-7 gap-y-2 px-3">
            {techStack.map((stack) => (
              <li
                className="cursor-default text-xl font-extrabold capitalize text-black text-opacity-30 transition-all duration-300 hover:text-orange-500 md:text-3xl"
                key={stack}
              >
                {stack}
              </li>
            ))}
          </ul>
          <button className="border-b-2 border-black p-2 transition-all duration-100 hover:translate-x-5 hover:border-orange-500 hover:text-orange-500">
            <span className="flex flex-row items-center justify-between gap-x-10 transition-all duration-300 hover:translate-x-5">
              Our full repertoire
              <HiOutlineArrowLongRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
