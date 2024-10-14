import { AboutMeType, ConnectType, ProjectType } from "./types";
import { v4 as uuidv4 } from "uuid";

export const about: AboutMeType = {
  start:
    "My curiosity for coding was sparked by seeing friends work in development. I began learning through online courses and quickly fell in love with the nature of it; problem solving with direct feedback. A year later, I started my formal education in frontend development at Futuregames in Stockholm.",
  experience:
    "So far in my journey I've worked with React, TypeScript, Next.js and CSS frameworks like SASS, Tailwind, and MUI. I have experience integrating REST APIs and developing unit and integration tests. Team projects taught me the power of Scrum for efficiency, and Git is an essential tool that brings structure and control in my work.",
  nextStep:
    "As my studies are coming to an end, I'm looking forward to the next phase of my career, starting with a 23-week internship from January 2025! I am currently seeking a position in a collaborative team where my eye for detail and ability to quickly learn new technologies are valued, while I continue to grow as a developer.",
  purpose:
    "In the making of this project, I learned to write unit and integration tests and discovered that I enjoy the thorough planning that they require. I look forward to exploring testing further during my internship, and if that opportunity doesn't arise, I'm committed to enhancing my testing skills throughout my career.",
};

export const connect: ConnectType = {
  connectText:
    "Whether you're a fellow student, a future colleague, or a potential employer, I hope this space helps us connect. Take a look at my projects, and if you'd like to chat or collaborate, feel free to reach out! I'm always excited to connect and explore new opportunities.",
  imgSrc: "/images/profil.png",
  alt: "Black and white image of Alexandra smiling",
};

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    title: "The Food Booth",
    date: "October 2024",
    imgSrc:"/images/food-booth.png",
    alt:"Snapshot of The Food Booth",
    description: 
      "The Food Booth is an interactive recipe generator built using the Meal DB API. Users can log in, browse recipes by categories and save favourites to their profile. I utilized TypeScript for type safety and the useContext hook to manage user information across pages.",
    githubLink:"https://github.com/blombergalex/food-booth",
    websiteLink:"https://food-booth.vercel.app/",
    favourite: false,
    techs: ["React", "Next.js", "Tailwind CSS", "Typescript", "API data fetching"],
  },
  {
    id: uuidv4(),
    title: "Parking Time Sweden",
    date: "June 2024",
    imgSrc: "/images/parking-time.png",
    alt: "Snapshot of the website Parking Time Sweden, showcasing its hero image and unique selling points.",
    description: 
    "I participated in a collaborative project where students at Futuregames created a new website for Parking Time Sweden. I carry with me the experience of integrating feedback from client demos into the development process and the efficient workflow enabled by Scrum.",
      githubLink:
      "https://github.com/Diyako-Qadri/parking-time-sweden-ab/tree/main",
    websiteLink: "https://parking-time-sweden-ab.vercel.app",
    favourite: false,
    techs: ["React", "Next.js", "Tailwind CSS", "Next-intl", "Scrum", "Jira"],
  },
  {
    id: uuidv4(),
    title: "My Portfolio",
    date: "September 2024",
    imgSrc: "/images/portfolio.png",
    alt: "Snapshot of frontend developer portfolio created by Alexandra Blomberg",
    description: "This portfolio represents my first experience writing unit and integration tests. I used Jest and React Testing Library to establish the tests and built the components accordingly. The key takeaway from this project was realizing my enjoyment of testing and the control it brings to the development process.",
    githubLink: "https://github.com/blombergalex/alex-bloom",
    websiteLink: "https://alex-bloom.vercel.app/",
    favourite: false,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest", "React Testing Library"],
  },
  {
    id: uuidv4(),
    title: "The Music Library 2.0",
    date: "August 2024",
    imgSrc: "/images/music-library2.0.png",
    alt: "Snapshot of The Music Library 2.0, showing an artist search and displaying listen previews from Spotify",
    description:
      "The Music Library 2.0 is a remake of my earlier creation The Music Library. In this version, the user can enter a search of an artist and the most matched result is displayed along with up to ten of the artist's most played albums on Spotify.",
    githubLink: "https://github.com/blombergalex/music-library2.0",
    websiteLink: "https://music-library2-0.vercel.app",
    favourite: false,
    techs:  ["React", "Vite", "TypeScript", "Tailwind CSS", "Material UI", "API data fetching"],
  },
  {
    id: uuidv4(),
    title: "The Music Library",
    date: "April 2024",
    imgSrc: "/images/music-library.png",
    alt: "Snapshot of app The Music Library showcasing some recommendations of sweet albums",
    description: "This is my first time working with React. I established an understanding of the core React concepts; functional components, props, and state. I enjoyed learning to store the data in objects and mapping over them to turn them into albums on the user's end.",
    githubLink: "https://github.com/blombergalex/the-music-library",
    websiteLink: "https://the-music-library.netlify.app/",
    favourite: false,
    techs: ["React", "Vite", "CSS Modules"],
  },
  {
    id: uuidv4(),
    title: "Jungle Jam",
    date: "February 2024",
    imgSrc: "/images/jungle-jam.png",
    alt: "Snapshot of API data fetching app Jungle Jam",
    description: "Jungle Jam marks my first time using data from an external source. The user enters a search of an animal, triggering an API call, and is presented with facts on the requested animal.",
    githubLink: "https://github.com/blombergalex/junglejam",
    websiteLink: "https://blombergalex.github.io/junglejam/",
    favourite: false,
    techs: ["HTML", "CSS", "JavaScript", "API data fetching"],
  },
  {
    id: uuidv4(),
    title: "Wonderflora",
    date: "February 2024",
    imgSrc: "/images/wonderflora.png",
    alt: "Snapshot of EJS app Wonderflora",
    description: "Wonderflora is a floral shop where I practiced routing in Express and using EJS templates. Thanks to this project, setting up routes with Next.js feels like a walk in the park compared to routing with Express.",
    githubLink: "https://github.com/blombergalex/wonderflora",
    websiteLink: "https://wonderflora.onrender.com/",
    favourite: false,
    techs: ["EJS", "CSS", "JavaScript", "Express"],
  },
  {
    id: uuidv4(),
    title: "Hey Babareeba",
    date: "December 2023",
    imgSrc: "/images/hey-babareeba.png",
    alt: "Snapshot of my song game Hey Babareeba",
    description:
      "Hey Babareeba is my first vanilla JavaScript creation. It's a song game where the user has to guess the name of the songs played, one word at a time. In the making of this game I gained an understanding of the fundamentals of Javascript while continuing to develop my skills with HTML and CSS.",
    githubLink: "https://github.com/blombergalex/song-game",
    websiteLink: "https://blombergalex.github.io/song-game/",
    favourite: false,
    techs: ["HTML", "CSS", "JavaScript"],
  },
];
