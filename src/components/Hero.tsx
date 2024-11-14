import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const heroDataArray = [
  {
    date: "Volume 31 | October 2024",
    heading: "Technology Radar",
    text: "An opinionated guide to today's technology landscape",
    buttonText: "Explore the latest edition",
    imageUrl: "/hero1.jpg",
  },
  {
    date: "",
    heading: "Thoutworks is a Visionary",
    text: "Gartner Magic Quadrant for Custom Software Development Services, 2024",
    buttonText: "Learn more",
    imageUrl: "/hero2.jpg",
  },
  {
    date: "Product engineering webinar",
    heading:
      "Spark the extraordinary potential of software-hardware integration",
    text: "",
    buttonText: "Register for the webinar",
    imageUrl: "/hero3.jpg",
  },
  {
    date: "Microsoft Ignite 2024",
    heading: "Spark th extraordinary future of your organization",
    text: "",
    buttonText: "Join us at the event",
    imageUrl: "/hero4.jpg",
  },
  {
    date: "",
    heading: "Spark the extraordinary possibilityy of what's next",
    text: "",
    buttonText: "See what we do",
    imageUrl: "/hero5.jpg",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextTab = () => {
    if (activeTab === heroDataArray.length - 1) {
      setActiveTab(0);
    } else {
      setActiveTab((activeTab) => activeTab + 1);
    }
  };

  const handlePreviousTab = () => {
    if (activeTab === 0) {
      setActiveTab(heroDataArray.length - 1);
    } else {
      setActiveTab((activeTab) => activeTab - 1);
    }
  };

  return (
    // <div className="bg-[#003E4E]">
    <div className="bg-[#f5f5f5]">
      <ul className="mx-auto flex max-w-7xl flex-col">
        {heroDataArray.map((heroData, index) => (
          <DataComponent
            key={index}
            index={index}
            heroData={heroData}
            onNextTab={handleNextTab}
            onPreviousTab={handlePreviousTab}
            activeTab={activeTab}
          />
        ))}
      </ul>
    </div>
  );
}

interface DataComponentProps {
  heroData: {
    date?: string;
    heading: string;
    text?: string;
    buttonText: string;
    imageUrl: string;
  };
  index: number;
  onNextTab: () => void;
  onPreviousTab: () => void;
  activeTab: number;
}

const DataComponent: React.FC<DataComponentProps> = ({
  heroData,
  index,
  onNextTab,
  onPreviousTab,
  activeTab,
}) => {
  const { date, heading, text, buttonText, imageUrl } = heroData;
  return (
    <li
      className={`relative block h-[500px] ${index !== activeTab && "hidden"}`}
    >
      <img
        className="bg h-full w-full bg-cover"
        src={imageUrl}
        alt="hero-image"
      />

      <div className="absolute left-10 top-1/4 flex flex-col gap-y-5 font-bold text-white md:left-[100px]">
        <span className="text-lg md:text-2xl">{date}</span>
        <span className="text-3xl sm:text-5xl md:max-w-xl lg:max-w-[730px] lg:text-6xl">
          {heading}
        </span>
        <span className="text-2l">{text}</span>
        <button className="self-start bg-tertiary p-3 text-xl transition duration-300 hover:bg-opacity-75 md:p-5">
          {buttonText}
        </button>
      </div>
      <FaChevronRight
        onClick={onNextTab}
        size={50}
        className="border-whit4 hover:bg-primary absolute right-5 top-1/2 rounded-full border border-white bg-transparent p-3 text-white transition-all duration-300 hover:border-none hover:bg-secondary"
      />
      <FaChevronLeft
        onClick={onPreviousTab}
        size={50}
        className="hover:bg-primary absolute left-5 top-1/2 rounded-full border border-white bg-transparent p-3 text-white transition-all duration-300 hover:border-none hover:bg-secondary"
      />
    </li>
  );
};
