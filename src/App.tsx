import "./App.css";
import { ProjectCard } from "./assets/components/ProjectCard";

function App() {
  return (
    <>
      <ProjectCard
        name={"name"}
        image={"image"}
        icons={["icon_1, icon_2"]}
        codeLink={"codeLink"}
        liveLink={"liveLink"}
      />
    </>
  );
}

export default App;
