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
  <div className="bg-black/40 rounded-lg overflow-hidden border border-gray-800 mt-6">
    <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
      <img 
        src={imageUrl} 
        alt={title} 
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <div className="p-4 space-y-4">
      <h3 className="text-base sm:text-lg lg:text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm lg:text-base">{period}</p>
      <p className="text-gray-300 text-xs sm:text-sm lg:text-base">{description}</p>
      
      <div className="flex flex-wrap gap-2 pt-2">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 text-xs sm:text-sm lg:text-xs bg-black/60 rounded-full border border-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      

      <div className="flex gap-3 pt-2">
        {websiteUrl && (
          <a 
            href={websiteUrl}
            className="inline-flex items-center gap-2 px-3 py-2 bg-white text-black rounded-full text-xs sm:text-sm lg:text-xs font-medium hover:bg-gray-100 transition-colors"
          >
            <Globe size={12} />
            Website
          </a>
        )}
        {sourceUrl && (
          <a 
            href={sourceUrl}
            className="inline-flex items-center gap-2 px-3 py-2 bg-white text-black rounded-full text-xs sm:text-sm lg:text-xs font-medium hover:bg-gray-100 transition-colors"
          >
            <Github size={12} />
            Source
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
