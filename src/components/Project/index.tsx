import { HeartIcon } from "@heroicons/react/20/solid";
import { ProjectType } from "@/utils/types";
import Image from "next/image";

type ProjectProps = ProjectType & {
  onFavouriteToggle: (id: string) => void;
  isFavourite: boolean;
};

const Project = ({
  id,
  title,
  imgSrc,
  alt,
  description,
  githubLink,
  websiteLink,
  onFavouriteToggle,
  isFavourite,
}: ProjectProps) => {
  return (
    <div
      key={id}
      data-testid="project"
      className="flex flex-col bg-amber-100 rounded-lg shadow-lg overflow-hidden border border-gray-200 m-2 pt-4 max-w-[370px]"
    >
      <div className="flex justify-center">
        <div className="relative w-[340px] h-[250px]">
          <Image
            src={imgSrc}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            sizes="(max-width: 340px)"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
        <p data-testid="description" className="text-gray-700 mb-4 flex-grow">{description}</p>
        <div className="flex flex-row justify-between">
          <a
            data-testid="github-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:underline"
          >
            See code in GitHub
          </a>
          <a
            data-testid="website-link"
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:underline"
          >
            Visit website
          </a>
          <button
            onClick={() => onFavouriteToggle(id)}
            className={`text-xl ${isFavourite ? "text-amber-500" : "text-gray-300"} transition-colors duration-300`}
            data-testid="favourite-btn"
          >
            <HeartIcon className={"w-6 h-6 hover:text-amber-500"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
