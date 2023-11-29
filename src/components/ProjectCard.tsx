import {
  getTechIconList,
  validateTechnologies,
} from "../domain";
import { ProjectCardProps } from "../types";

import "./ProjectCard.css"

export const ProjectCard = (props: ProjectCardProps) => {
  const { name, image, technologies, repoUrl, liveUrl } = props;

  const validTechnologies = validateTechnologies(technologies);
  const techIconList = getTechIconList(validTechnologies);

  const projectCardStyle = { 
    backgroundImage: `url(${image})`,
  };

  return (
    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card" style={projectCardStyle}>
        <div className="card-content">
          <label className="project-name">
            {name}
          </label>
          <div className="icons">
            <a href={repoUrl} className="repo-link">
              <img src="./icons/technologies/github.svg" alt="GitHub Repo" />
            </a>
            <div className="technology-icons">
              {techIconList}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
