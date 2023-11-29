import projects from "../projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
  return (
    <>
    <h1>projects list</h1>
      {projects.map((project, index) => {
        const { name, image, technologies, repoUrl, liveUrl } = project;
        return (
          <ProjectCard
            name={name}
            image={image}
            technologies={technologies}
            repoUrl={repoUrl}
            liveUrl={liveUrl}
            key={index}
          />
        );
      })}
    </>
  );
};


export default ProjectsList;