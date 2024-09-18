'use client'

import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import ProjectSection from "@/components/ProjectSection";
import Navigation from "@/components/Navigation";
import { about, connect, projects } from "@/utils/data";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<"aboutMe" | "projects" | "connect">("aboutMe");
  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const projectTop = projectRef.current?.getBoundingClientRect().top ?? 0;
      const windowHeight = window.innerHeight;
      console.log("scroll Y position: " + window.scrollY)
      console.log("position of projectTop " + projectTop)
      if(projectTop < 815 && projectTop > -1600) {
        setIsProjectSectionVisible(true);
      } else {
        setIsProjectSectionVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [projectRef]);
  

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
    {/* {isProjectSectionVisible && <p data-testid="visibleSignal" className="text-white bg-amber-700 fixed z-40">Project section is visible</p>} */}
        <p 
          data-testid="visibleSignal" 
          className={`${isProjectSectionVisible ? "fixed z-40 bg-amber-700" : "text-black -z-40"} `}
        >
          Project section is visible
        </p>
      <div className="max-w-4xl mx-auto ">
        <div
          ref={aboutMeRef}
          data-testid="aboutMe"
          data-active={aboutMeInView ? "true" : "false"}
          className={`min-h-screen ${aboutMeInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[1000ms]`}
        >
          <AboutMe {...about} />
        </div>
        <div
          ref={projectRef}
          data-testid="projects"
          data-active={projectInView ? "true" : "false"}
          className={`min-h-screen ${projectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[2500ms]`}
        >
          <ProjectSection projects={projects} />
        </div>
        <div
          ref={connectRef}
          data-testid="connect"
          data-active={connectInView ? "true" : "false"}
          className={`${connectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[2000ms]`}
        >
          <Connect {...connect} />
        </div>
      </div>
    </>
  );
}
