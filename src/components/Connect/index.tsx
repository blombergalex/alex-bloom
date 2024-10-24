import { ConnectType } from "@/utils/types";
import { EnvelopeIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ConnectSectionProps = {
  onScrollToSection: (section: "connect") => void;
};

const Connect = ({
  connectText,
  imgSrc,
  alt,
  onScrollToSection,
}: ConnectType & ConnectSectionProps) => {
  return (
    <section
      data-testid="connect-section"
      className="flex justify-center p-6 md:p-14"
    >
      <div className="flex flex-col h-screen text-gray-200 text-sm leading-6 bg-black space-y-5 md:text-lg">
        <h2
          className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg sticky top-[0] z-10 md:text-2xl md:py-12 md:top-[61px] cursor-pointer"
          onClick={() => {
            onScrollToSection("connect");
          }}
        >
          Let's Connect
        </h2>
        <p data-testid="connect-text" className="opacity-85">
          {connectText}
        </p>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col space-y-4 justify-center">
            <div className="text-gray-200 hover:text-amber-500">
              <a
                href="mailto:blombergalexandras@gmail.com"
                className="flex items-center space-x-2"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span>blombergalexandras@gmail.com</span>
              </a>
            </div>
            <div className="text-gray-200 hover:text-amber-500">
              <a
                href="https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <UserPlusIcon className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex w-max-full justify-center mx-auto">
            <Image
              src={imgSrc}
              width={225}
              height={340}
              alt={alt}
              className="max-w-32 h-auto rounded-full m-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
