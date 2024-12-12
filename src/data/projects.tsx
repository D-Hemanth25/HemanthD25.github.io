import repoInsights from "../assets/repoInsights.png";
import whatDog from "../assets/whatDog.png";

const projects = [
  {
    title: "Time-Based Image Hosting",
    period: "work in progress",
    description: "Design and Developed a time-based image hosting service that enables users to upload and share images with custom expiration times.",
    technologies: [
      "AWS",
      "Python",
      "Fast API",
      "JavaScript",
      "Next.js",
      "TailwindCSS",
    ],
    imageUrl: "/api/placeholder/800/450",
    websiteUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "GitHub Repo Assistant",
    period: "December 2024",
    description: "Developed an application that analyzes any GitHub repository, providing users with a comprehensive understanding of its structure and functionality.",
    technologies: [
      "TypeScript",
      "Next.js",
      "LLM",
      "Auth",
      "Gemini API",
      "GitHub API",
    ],
    imageUrl: repoInsights,
    websiteUrl: "#",
    sourceUrl: "https://github.com/D-Hemanth25/Repo-Insights",
  },
  {
    title: "AI Application Maker",
    period: "December 2024",
    description: "Developed an AI-powered code generation platform that transforms user prompts into fully functional code projects.",
    technologies: ["TypeScript", "React", "Gemini API", "Node", "Express", "LLM"],
    imageUrl: "/api/placeholder/800/450",
    websiteUrl: "#",
    sourceUrl: "https://github.com/D-Hemanth25/RogueLike-py",
  },
    {
      title: "Image Recognition API",
      period: "November 2023",
      description: "Built an Image Recognition API that identifies dog breeds from images.",
      technologies: [
        "Python",
        "Flask",
        "CNN",
        "REST"
      ],
      imageUrl: whatDog,
      websiteUrl: "#",
      sourceUrl: "https://github.com/D-Hemanth25/Repo-Insights",
    },
  ];
  
  export default projects;
  