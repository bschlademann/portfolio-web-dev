import "./App.css";
import projects from "./projects.json";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <>
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
}

export default App;
