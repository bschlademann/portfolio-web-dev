import { Technology } from "./types";

export const isTechnology = (value: unknown): value is Technology => {
  const validTechnologies: Technology[] = ["css3", "github", "html5", "javascript", "nodejs", "photoshop", "react", "typescript"];
  return typeof value === 'string' && validTechnologies.includes(value as Technology);
};

export const validateTechnologies = (technologies: string[]): Technology[] => {
  return technologies.filter(isTechnology);
};

export const getTechIcon = (technology: Technology, index: number) => {
  return (
    <img
      className="tech-icon"
      src={`./icons/technologies/${technology}.svg`}
      alt=""
      key={index}
    />
  )
};

export const getTechIconList = (technologies: Technology[]) => {
  const validTechnologies = validateTechnologies(technologies)
  return (
    <div className="tech-icon-list">
      {validTechnologies.map((technology, index) => getTechIcon(technology, index))}
    </div>
  );
};
