import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import ProjectSection from "@/components/ProjectSection";
import { about, connect, projects  } from "@/utils/data";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  
  return (
    <>
      <AboutMe {...about}/>
      <ProjectSection projects={projects} />
      <Connect {...connect} />
      <ScrollButton />
    </>
  );
}