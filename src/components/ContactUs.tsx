import { useState } from "react";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((modal) => !modal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleToggleModal();
    e.preventDefault();
  };
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
          <span className="text-darkBlue">See how we can help.</span>
          <button
            onClick={handleToggleModal}
            className="mt-4 rounded-lg border-primary bg-primary px-4 py-2 text-sm transition duration-300 hover:bg-opacity-75 max-sm:self-start"
          >
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
      {isModalOpen && (
        <Modal
          handleSubmit={handleSubmit}
          handleToggleModal={handleToggleModal}
        />
      )}
    </section>
  );
};

export default ContactUs;

interface ModalProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleSubmit, handleToggleModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <form
        className="z-10 flex w-80 flex-col items-center justify-center gap-y-4 rounded-xl bg-secondary p-5 md:w-[512px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full rounded-md p-2"
        />
        <textarea
          placeholder="Write a message to us"
          className="h-32 w-full rounded-md p-2"
        ></textarea>
        <div className="flex flex-row gap-x-5">
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-white transition-all duration-200 hover:bg-opacity-50"
          >
            Submit
          </button>
          <button
            onClick={handleToggleModal}
            type="button"
            className="rounded-lg bg-tertiary px-4 py-2 text-white transition-all duration-200 hover:bg-opacity-50"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};
