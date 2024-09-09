import { AboutMeType, ConnectType, ProjectType } from "./types";
import { v4 as uuidv4 } from 'uuid';


export const about: AboutMeType = {
  start: "My curiosity for coding was sparked by seeing friends work in development. I began learning through online courses and quickly realized how much enjoy it. A year later, I started my formal education in frontend development. I've always loved puzzles and problem solving so discovering coding feels like finding a gold mine in which I am thrilled to continue digging.",
  experience: "So far in my journey I've worked with React, TypeScript, Next.js, Vite, and CSS frameworks like SASS, Tailwind, and MUI. I love playing around with API data fetching and have experience working with Scrum through sprints. Git is an essential tool that brings control and efficiency in my work as I have become more and more comfortable with its power.",
  nextStep: "As I near the completion of my studies, I'm excited for the next phase of my career. Thanks to the continual learning this field offers, I look forward to pursuing opportunities that allow me to further develop my coding skills. My goal is to join a collaborative team where I can apply my current knowledge and have the space and mentorship to continue growing.",
  purpose: "This page is designed to give you a glimpse into my journey by showcasing some of the projects that I've worked on. In the making of this project, I learned to write unit and integration tests using Jest and React Testing Library. I discovered that truly I enjoy testing and feel like it's an area of development that I want to explore further in the future."
}

export const connect: ConnectType = {
  connectText: "Whether you're a fellow student, a future colleague, or a potential employer, I hope this space helps us connect. Take a look at my projects, and if you'd like to chat or collaborate, feel free to reach out! I'm always excited to connect and explore new opportunities.",
  imgSrc: "/images/profil.png",
  alt: "Black and white image of Alexandra smiling"
}

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    title: "My Portfolio",
    imgSrc: "/images/portfolio.png",
    alt: "Snapshot of frontend developer portfolio created by Alexandra Blomberg",
    description: "This portfolio is my first project working with unit and integration tests. I wanted a place to showcase my projects hence I built this with React, Next.JS, Typescript and Tailwind. I set up the tests with Jest and React Testing Library and built my components off the tests.",
    githubLink: "https://github.com/blombergalex/alex-bloom",
    websiteLink: "https://alex-bloom.vercel.app/",
    favourite: false
  },
  {
    id: uuidv4(),
    title: "Parking Time Sweden",
    imgSrc: "/images/parking-time.png",
    alt: "Snapshot of the website Parking Time Sweden, showcasing its hero image and unique selling points.",
    description: "This app is a collaboration between Parking Time Sweden and students at Changemaker Educations (Future Games). Frontend developers, UX designers, and an Agile Project Manager worked together to give Parking Time Sweden a new face and improved user experience. Created with React, Next.js, Tailwind, next-intl for internationalization.",
    githubLink: "https://github.com/Diyako-Qadri/parking-time-sweden-ab/tree/main",
    websiteLink: "https://parking-time-sweden-ab.vercel.app",
    favourite: false
  },
  {
    id: uuidv4(),
    title: "The Music Library",
    imgSrc: "/images/music-library.png",
    alt: "Snapshot of app The Music Library showcasing some recommendations of sweet albums",
    description: "This is my first React creation where I practiced my understanding of the core React concepts of functional components, props, and state.",
    githubLink: "https://github.com/blombergalex/the-music-library",
    websiteLink: "https://the-music-library.netlify.app/",
    favourite: false
  },
  {
    id: uuidv4(),
    title: "Music Library 2.0",
    imgSrc: "/images/music-library2.0.png",
    alt: "Snapshot of The Music Library 2.0, showing an artist search and displaying listen previews from Spotify",
    description: "The Music Library 2.0 is a remake of my earlier creation The Music Library. In this version, the user can enter a search for an artist, and the most matched result is displayed, along with up to ten of the artist's most played albums on Spotify. Skills practiced: API data fetching with a user fired event. App created with React, TypeScript, and the MUI library for styling.",
    githubLink: "https://github.com/blombergalex/music-library2.0",
    websiteLink: "https://music-library2-0.vercel.app",
    favourite: false
  } 
];
