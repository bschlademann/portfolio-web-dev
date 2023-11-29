import { getTechIconList } from "../domain";
import { ProjectCardProps } from "../types";

export const ProjectCard = (props: ProjectCardProps) => {
  const { name, image, technologies, repoUrl, liveUrl} = props;

  return (
    <div className="project-card">
      <label>
        {name}
        <a href={liveUrl}>
          <img src={`./images/${image}`} alt="" />
        </a>
      </label>
      <div className="icons">
        <a href={repoUrl}>
          <img src="./icons/technologies/github.svg" alt="" />
        </a>
        <div className="technology-icons">{getTechIconList(technologies)}</div>
      </div>
    </div>
  );
};
