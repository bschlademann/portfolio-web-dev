import "./App.css";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <>
      <ProjectCard
        name={"name"}
        image={"news-homepage.png"}
        icons={["icon_1, icon_2"]}
        codeLink={"codeLink"}
        liveLink={"liveLink"}
      />
    </>
  );
}

export default App;
