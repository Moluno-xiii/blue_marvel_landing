import React from "react";
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
];

const Partners = () => {
  return (
    <section className="overflow-x-hidden">
      <div
        className="mx-auto max-w-7xl px-5 py-10 lg:h-[550px] lg:px-10"
        id="partners"
      >
        <div className="flex flex-row">
          <div className="hidden md:w-[500px] lg:block">
            <img
              src="/partners-image.avif"
              alt="image of man and woman smiling"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-y-7 px-10 pb-10">
            <p className="text-2xl font-bold">
              We've stopped counting. Over 500 brands count on us.
            </p>
            <span className="text-lg font-semibold text-gray-400">
              1,200+ projects executed successfully and an average relationship
              of over 3 years.
            </span>
            <button className="border-b-2 border-black transition-all duration-100 hover:translate-x-5 hover:border-orange-500 hover:text-orange-500 lg:self-start">
              <span className="flex flex-row items-center justify-between gap-x-10 transition-all duration-300 hover:translate-x-5">
                Our greatest hits <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10 overflow-hidden lg:-translate-y-60">
          <ul className="animate-scroll flex gap-7">
            {partnersInfo.map((partner, index) => (
              <PartnerComponent partner={partner} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;

interface PartnerComponentProps {
  partner: {
    job: string;
    title: string;
    imageUrl: string;
    text: string;
    author: string;
  };
}

const PartnerComponent: React.FC<PartnerComponentProps> = ({ partner }) => {
  return (
    <li className="flex w-[300px] flex-col gap-y-7 rounded-xl bg-[#f5f5f5] px-4 py-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-row items-center justify-between">
        <img src={partner.imageUrl} className="h-5" alt="partner's image" />
        <HiArrowRight className="hover:text-orange-500" />
      </div>
      <p className="text-xs">"{partner.text}"</p>

      <div className="mt-auto flex flex-col text-sm">
        <span className="font-bold">{partner.author}</span>
        <span>{partner.job}</span>
      </div>
    </li>
  );
};
