import Image from "next/image";

const Header = () => {
  return (
    <div
      data-testid="header"
      className="flex flex-col sm:pt-5 "
    >
      <h2 className="text-right font-flowers text-2xl tracking-wider opacity-60 text-gray-300 pb-6 p-3 mr-2 sm:text-4xl md:text-6xl md:m-6 animate-fade-in-down">
        Welcome to my portfolio
      </h2>
      <div className="flex justify-between items-end">
        <h1 className="self-end text-lg text-white uppercase opacity-60 font-SansNarrow ml-5 md:ml-10 sm:text-2xl md:tracking-wide">
          ALEXANDRA BLOMBERG
        </h1>
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
