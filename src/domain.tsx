import { Technology } from "./types";

export const getTechIcon = (technology: Technology) => {
  return (
    <img
      className="tech-icon"
      src={`./icons/icons8-${technology}.svg`}
      alt=""
    />
  );
};

export const getTechIconList = (technologies: Technology[]) => {
  return (
    <div className="tech-icon-list">
      {technologies.map((technology) => getTechIcon(technology))}
    </div>
  );
};

export const isTechnology = (value: unknown): value is Technology => {
    const validTechnologies: Technology[] = ["css3", "github", "html5", "javascript", "nodejs", "photoshop", "react", "typescript"];
    return typeof value === 'string' && validTechnologies.includes(value as Technology);
};

export const validateTechnologies = (
  technologies: string[]
): technologies is Technology[] => {
  return technologies.every(isTechnology);
};
