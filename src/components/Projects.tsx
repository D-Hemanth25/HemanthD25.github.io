import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="text-white" id="projects-section">
      <div className="mb-4">
        <h1 className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-4">Projects</h1>
        <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-4">
          Check out some of my recent projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
