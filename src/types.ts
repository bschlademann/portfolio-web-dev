export type ProjectCardProps = {
  name: string;
  image: string;
  technologies: string[];
  repoUrl: string;
  liveUrl: string;
};

export type Technology =
  | "css3"
  | "github"
  | "html5"
  | "javascript"
  | "nodejs"
  | "photoshop"
  | "react"
  | "typescript";
