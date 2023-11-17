import { Technology } from "./types";

export const getTechIcon = (technology: Technology) => {
  return <img className="tech-icon" src={`./icons/icons8-${technology}.svg`} alt="" />;
};

export const getTechIconList = (technologies: Technology[]) => {
    return <div className="tech-icon-list">
        {technologies.map(technology => getTechIcon(technology))}
    </div>
};
