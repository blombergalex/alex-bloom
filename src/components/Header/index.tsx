import Image from "next/image";

const Header = () => {
  return (
    <div data-testid="header" className="flex flex-col">
      <div className="flex justify-between items-end font-SansNarrow md:tracking-wide">
        <div className="text-gray-200 ml-5 md:ml-10 ">
          <h1 className="self-end text-lg uppercase sm:text-2xl">
            ALEXANDRA BLOMBERG
          </h1>
          <p className="capitalize opacity-80 md:text-lg">Frontend developer</p>
        </div>
        <Image
          src="/images/floating-sunflowers.png"
          width={340}
          height={225}
          alt="Sunflowers floating in hero section"
          className="h-28 w-auto md:h-56"
        />
      </div>
      <div className="w-full border-b border-b-gray-300 border-solid mx-auto h-4 md:h-10"></div>
    </div>
  );
};

export default Header;
