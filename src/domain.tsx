import { Technology } from "./types";

export const getTechIcon = (technology: Technology, index: number) => {
  return (
    <img
      className="tech-icon"
      src={`./icons/${technology}.svg`}
      alt=""
      key={index}
    />
  );
};

export const getTechIconList = (technologies: Technology[]) => {
  return (
    <div className="tech-icon-list">
      {technologies.map((technology, index) => getTechIcon(technology, index))}
    </div>
  );
};

// export const isTechnology = (value: unknown): value is Technology => {
//     const validTechnologies: Technology[] = ["css3", "github", "html5", "javascript", "nodejs", "photoshop", "react", "typescript"];
//     return typeof value === 'string' && validTechnologies.includes(value);
// };

// export const validateTechnologies = (
//   technologies: string[]
// ): technologies is Technology[] => {
//   return technologies.every(isTechnology);
// };
