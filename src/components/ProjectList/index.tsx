import { useState } from "react";
import Project from "../Project";
import { ProjectType } from "@/utils/types";
import ShowAllButton from "../ShowAllButton";

type ProjectListProps = {
  projectItems: ProjectType[];
  onFavouriteToggle: (id: string) => void;
  favouriteProjects: string[];
};

const ProjectList = ({
  projectItems,
  onFavouriteToggle,
  favouriteProjects,
}: ProjectListProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAllToggle = () => {
    setShowAll(!showAll);
    console.log("Show all before click:" + showAll);
  };

  const displayedProjects = showAll ? projectItems : projectItems.slice(0, 4);

  return (
    <div className="flex flex-col m-4">
      <div
        data-testid="project-list"
        className={`flex flex-wrap text-gray-200 
          ${projectItems.length % 4 === 0 ? "justify-center" : "justify-start"}`}
      >
        {displayedProjects &&
          displayedProjects.map((item) => (
            <Project
              key={item.id}
              {...item}
              onFavouriteToggle={onFavouriteToggle}
              isFavourite={favouriteProjects.includes(item.id)}
            />
          ))}
      </div>
      <ShowAllButton onShowAllToggle={handleShowAllToggle} showAll={showAll} />
    </div>
  );
};

export default ProjectList;
