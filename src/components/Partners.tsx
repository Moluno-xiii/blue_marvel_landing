import { HiArrowRight } from "react-icons/hi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const partnersInfo = [
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
  {
    imageUrl: "/rolls-royce.svg",
    title: "Rolls-Royce",
    text: "Repeat Business is the best testament to a team's ability to perform, and i have no hesitation in hiring them again. Blue marvel's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives",
    author: "Brad Mabry",
    job: "Product Manager of Rolls Royce",
  },
];
const Partners = () => {
  return (
    <section>
      <div
        className="mx-auto flex max-w-7xl flex-col px-5 py-10 lg:px-10"
        id="partners"
      >
        <div className="flex flex-row">
          <div className="hidden md:block md:w-[500px]">
            <img
              src="/partners-image.avif"
              alt="image of man and woman smiling"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-y-7 px-10 py-10">
            <p className="text-2xl font-bold">
              We've stopped counting. Over 500 brands count on us.
            </p>
            <span className="text-lg font-semibold text-gray-400">
              1,200+ projects executed successfully and an average relationship
              of over 3 years.
            </span>
            <button className="flex flex-row items-center justify-between gap-x-10 self-start border-b-2 border-black transition-all duration-300 hover:border-orange-500 hover:text-orange-500">
              Our greatest hits <HiOutlineArrowLongRight />
            </button>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {partnersInfo.map((partner) => (
            <li
              key={partner.title}
              className="flex flex-col gap-y-7 rounded-xl px-4 py-6 shadow-md"
            >
              <div className="flex flex-row items-center justify-between">
                <img
                  src={partner.imageUrl}
                  className="h-5"
                  alt="partner's image"
                />
                <HiArrowRight className="hover:text-orange-500" />
              </div>
              <p className="text-xs">"{partner.text}"</p>

              <div className="mt-auto flex flex-col text-sm">
                <span className="font-bold">{partner.author}</span>
                <span>{partner.job}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
