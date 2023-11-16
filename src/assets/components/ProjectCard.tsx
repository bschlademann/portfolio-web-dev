import { ProjectCardProps } from "../../types";

// const TechnologyIcons = (props) => {
//   const react = <i class="fa-brands fa-react"></i>

// }

export const ProjectCard = (props: ProjectCardProps) => {
  const { name, image, icons, codeLink, liveLink } = props;
  return (
    <div className="project-card">
      {name}
      {image}
      {icons}
      {codeLink}
      {liveLink}

    </div>
  );
};
