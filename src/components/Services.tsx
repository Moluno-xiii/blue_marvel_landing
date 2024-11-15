import { FaChevronRight } from "react-icons/fa6";

const services = [
  {
    title: "E-commerce Developement",
    text: "Deploy fast and scalable online retail platforms tht improve the customer experience and conversion rates.",
    imageUrl: "/services-1-new.jpeg",
  },
  {
    title: "MVP Developement",
    text: "Test market viability and gather feedback with the rapid developement of minnimal viable products",
    imageUrl: "/services-2.jpeg",
  },
  {
    title: "UI/UX Design",
    text: "Delight end users with intuitive and engaging user interfaces.",
    imageUrl: "/services-3.jpeg",
  },
  {
    title: "Android App Developement",
    text: "Build native apps for product that run on Android, accessed via Play Store.",
    imageUrl: "/services-4.jpeg",
  },
  {
    title: "IOS App Developement",
    text: "Build native apps for the Apple ecosystem and products like iPhone and ipad, accessed via App Store.",
    imageUrl: "/services-5.jpeg",
  },
  {
    title: "Web Application Developement",
    text: "Develop dynamic and responsive web applications optimized for performance and scalability.",
    imageUrl: "/services-6.jpeg",
  },
  {
    title: "Back-End Developement",
    text: "Create robust, scalable, and secure server-side logic that powers websites and apps behind the scenes.",
    imageUrl: "/services-1-new.jpeg",
  },
  {
    title: "dApp Developement",
    text: "Build decentralized applications (dApps) on blockchain platforms for secure and transparent business solutions.",
    imageUrl: "/services-2.jpeg",
  },
  {
    title: "Front-End Developement",
    text: "Craft beautiful, user-friendly interfaces tailored to your brand.",
    imageUrl: "/services-3.jpeg",
  },
];

const Services = () => {
  return (
    <div className="mb-28 bg-[#f6f7f9] px-3 md:mb-48 md:px-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-y-10 px-10 py-10 text-black">
        <span className="border-b-primary self-center border-b-2 pb-1 text-4xl font-bold">
          Services
        </span>
        <ul
          id="services"
          className="grid grid-cols-1 gap-x-20 gap-y-44 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

const Service = ({
  service,
}: {
  service: { text: string; title: string; imageUrl: string };
}) => {
  return (
    <li className="relative mt-5 flex justify-center md:mt-20">
      <div className="">
        <img
          src={service.imageUrl}
          alt={`illustration of service ${service.title}`}
          height={202}
          width={372}
        />
      </div>
      <div className="z-2 absolute top-28 flex h-[250px] max-w-[340px] flex-col justify-between bg-white px-4 py-3 text-black shadow-lg transition-all duration-500 hover:-translate-x-5 hover:shadow-2xl max-md:left-20 sm:top-40 md:-right-10">
        <p className="relative mt-3 font-semibold xl:text-xl">{service.text}</p>
        <div className="border-primary flex cursor-pointer flex-row items-center gap-x-2 self-start pb-1 transition-all duration-100 hover:border-b-2">
          <span className="max-sm:text-sm">Learn more</span>
          <FaChevronRight className="text-primary" />
        </div>
        <span className="absolute -left-7 -top-5 bg-black px-4 py-2 text-sm font-semibold text-white">
          {service.title}
        </span>
      </div>
    </li>
  );
};
