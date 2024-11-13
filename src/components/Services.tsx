const services = [
  {
    title: "E-commerce Developement",
    text: "Deploy fast and scalable online retail platforms tht improve the customer experience and conversion rates.",
  },
  {
    title: "MVP Developement",
    text: "Test market viability and gather feedback with the rapid developement of minnimal viable products",
  },
  {
    title: "UI/UX Design",
    text: "Delight end users with intuitive and engaging user interfaces.",
  },
  {
    title: "Android App Developement",
    text: "Build native apps for product that run on Android, accessed via Play Store.",
  },
  {
    title: "IOS App Developement",
    text: "Build native apps for the Apple ecosystem and products like iPhone and ipad, accessed via App Store.",
  },
  {
    title: "Web Application Developement",
    text: "Develop dynamic and responsive web applications optimized for performance and scalability.",
  },
  {
    title: "Back-End Developement",
    text: "Create robust, scalable, and secure server-side logic that powers websites and apps behind the scenes.",
  },
  {
    title: "dApp Developement",
    text: "Build decentralized applications (dApps) on blockchain platforms for secure and transparent business solutions.",
  },
  {
    title: "Front-End Developement",
    text: "Craft beautiful, user-friendly interfaces tailored to your brand.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-y-10 bg-[#f6f7f9] px-10 py-10 text-black">
      <span className="self-center text-4xl font-bold underline">Services</span>
      <span className="text-4xl font-bold capitalize">
        Software developement & design
      </span>
      <ul
        id="services"
        className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3"
      >
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Services;

const Service = ({ service }: { service: { text: string; title: string } }) => {
  return (
    <li className="flex flex-col justify-center gap-y-3 rounded-2xl border-[#ebeeef] bg-white px-4 py-6 shadow-sm">
      <span className="cursor-default text-xl font-bold underline transition-all duration-300 hover:no-underline">
        {service.title}
      </span>
      <span>{service.text}</span>
    </li>
  );
};
