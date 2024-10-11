'use client'

import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import ProjectSection from "@/components/ProjectSection";
import Navigation from "@/components/Navigation";
import { about, connect, projects } from "@/utils/data";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<"aboutMe" | "projects" | "connect">("aboutMe");

  const aboutMeInView = useInView(aboutMeRef);
  const projectInView = useInView(projectRef);
  const connectInView = useInView(connectRef);

  useEffect(() => {
    if (aboutMeInView) {
      setActiveSection("aboutMe");
    } else if (projectInView) {
      setActiveSection("projects");
    } else if (connectInView) {
      setActiveSection("connect");
    }
  }, [aboutMeInView, projectInView, connectInView]);

  const handleScrollToSection = (section: "aboutMe" | "projects" | "connect") => {
    const ref = section === "aboutMe" ? aboutMeRef : section === "projects" ? projectRef : connectRef;
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY + 1;
  
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navigation onScrollToSection={handleScrollToSection} activeSection={activeSection} />
      <div className="max-w-4xl mx-auto">
        <div
          ref={projectRef}
          data-testid="projects"
          data-active={projectInView ? "true" : "false"}
          className={`min-h-screen ${projectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[2500ms]`}
        >
          <ProjectSection projects={projects} onScrollToSection={handleScrollToSection}/>
          <ArrowDownCircleIcon onClick={() => handleScrollToSection("aboutMe")} className="h-6 w-6 text-gray-400 mx-auto cursor-pointer" />
        </div>
        <div
          ref={aboutMeRef}
          data-testid="aboutMe"
          data-active={aboutMeInView ? "true" : "false"}
          className={`min-h-screen ${aboutMeInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[1000ms]`}
        >
          <AboutMe {...about} onScrollToSection={handleScrollToSection}/>
          <ArrowDownCircleIcon onClick={() => handleScrollToSection("connect")} className="h-6 w-6 text-gray-400 mx-auto cursor-pointer" />
        </div>
        <div
          ref={connectRef}
          data-testid="connect"
          data-active={connectInView ? "true" : "false"}
          className={`${connectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[2000ms]`}
        >
          <Connect {...connect} onScrollToSection={handleScrollToSection}/>
        </div>
      </div>
    </>
  );
}
