import { Globe, Github } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  period, 
  description, 
  technologies, 
  imageUrl, 
  websiteUrl, 
  sourceUrl 
}) => (
  <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 mt-10">
    {/* Project Image */}
    <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
      <img 
        src={imageUrl} 
        alt={title} 
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    {/* Content */}
    <div className="p-6 space-y-4 flex flex-col justify-between">
      <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-gray-400">{period}</p>
      <p className="text-gray-300">{description}</p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 pt-2">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 text-sm bg-black/60 rounded-full border border-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-3 pt-2">
        {websiteUrl && (
          <a 
            href={websiteUrl}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            <Globe size={16} />
            Website
          </a>
        )}
        {sourceUrl && (
          <a 
            href={sourceUrl}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            <Github size={16} />
            Source
          </a>
        )}
      </div>
      </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "RogueLike Game",
      period: "October 2024",
      description: "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Python",
        "tcod",
        "Game Dev"
      ],
      imageUrl: "/api/placeholder/800/450",
      sourceUrl: "https://github.com/D-Hemanth25/RogueLike-py",
    },
    {
      title: "Magic UI",
      period: "June 2023 - Present",
      description: "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI"
      ],
      imageUrl: "/api/placeholder/800/450",
      websiteUrl: "#",
      sourceUrl: "#"
    }
  ];

  return (
    <div className="text-white">
      {/* Projects Header */}
      <div className="mb-4">
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-5'>Projects</h1>
        <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold mb-5">
          Check out my latest work
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8">
          Ive worked on a variety of projects, from simple websites to complex web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id='projects'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;