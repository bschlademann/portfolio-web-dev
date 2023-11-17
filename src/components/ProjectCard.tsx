import { getTechIconList } from "../domain";
import { ProjectCardProps } from "../types";

// const TechnologyIcons = (props) => {
//   const react = <i class="fa-brands fa-react"></i>

// }


export const ProjectCard = (props: ProjectCardProps) => {
  const { name, image, technologies, repoUrl, liveUrl } = props;

  return (
    <div className="project-card">
      {/* click on image leads to live website hosted on github pages */}
      <a href={liveUrl}>
        <img src={`./images/${image}`} alt="" />
        {name}
      </a>
      <a href={repoUrl}>
        <img src="./icons/icons8-github.svg" alt="" />
      </a>
      <div className="technology-icons">{getTechIconList(technologies)}</div>
    </div>
  );
};
