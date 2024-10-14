import { HeartIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ProjectType } from "@/utils/types";
import Image from "next/image";

type ProjectProps = ProjectType & {
  onFavouriteToggle: (id: string) => void;
  isFavourite: boolean;
};

const Project = ({
  id,
  title,
  date,
  imgSrc,
  alt,
  description,
  githubLink,
  websiteLink,
  techs,
  onFavouriteToggle,
  isFavourite,
}: ProjectProps) => {
  return (
    <div
      key={id}
      data-testid="project"
      className="flex flex-col bg-amber-100 rounded-lg shadow-lg overflow-hidden border border-gray-200 m-2 pt-4 min-h-[585px] max-w-[370px] max-[420px]:w-[320px] cursor-default"
    >
      <div className="flex justify-center">
        <div className="relative w-[340px] h-56 max-[420px]:w-[300px]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            objectFit="fill"
            className="rounded-lg"
            sizes="(max-width: 340px)"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between font-semibold">
          <h3 className="text-lg text-black">{title}</h3>
          <p className="text-gray-700 text-xs mt-2">{date}</p>  
        </div>
        <p data-testid="description" className="text-gray-700 my-2 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap text-gray-700 text-sm mb-3">
          {techs && 
            techs.map((item, index) => (
              <p key={index} className="px-1 font-semibold border border-1 border-gray-700 m-1">{item}</p>
          ))}
        </div>
        <div className="flex flex-row">
          <div className="flex space-x-3">
            <a
              data-testid="website-link"
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-amber-500 hover:scale-105 hover:underline transition-all"
            >
              <p>Live project</p>
              <ArrowTopRightOnSquareIcon className="h-5"/>
            </a>
            <a
              data-testid="github-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-black hover:scale-105 hover:underline transition-all"
            >
              <p>Source code</p>
              <ArrowTopRightOnSquareIcon className="h-5"/>
            </a>
          </div>
          <button
            onClick={() => onFavouriteToggle(id)}
            data-testid="favourite-btn"
            className={`text-xl ml-auto ${isFavourite ? "text-amber-500" : "text-gray-700"} transition-colors duration-300 w-6 h-6 lg:hover:text-amber-500`}
          >
            <HeartIcon  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
