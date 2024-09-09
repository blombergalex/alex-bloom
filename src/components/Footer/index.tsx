import { EnvelopeIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div
      data-testid="footer"
      className="flex flex-col justify-center p-4 bg-amber-500 text-gray-300"
    >
      <div className="my-10 md:mx-10">
        <h3 className="flex font-semibold font-SansNarrow text-lg mb-4">
          Say Hello
        </h3>
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:blombergalexandras@gmail.com"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <EnvelopeIcon className="w-6 h-6 text-gray-300 hover:text-gray-200" />
            <span>blombergalexandras@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/alexandra-blomberg-7231a616a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <UserPlusIcon className="w-6 h-6 text-gray-300 hover:text-gray-200" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <p
        data-testid="bottom-text"
        className="text-center pt-14 border-t-2 border-t-gray-300 font-SansNarrow md:text-lg"
      >
        Alexandra Blomberg &copy; {currentDate} | &nbsp;
        <a
          href="https://github.com/blombergalex/alex-bloom"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          Source code
        </a>
      </p>
    </div>
  );
};

export default Footer;
