import "./App.css";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <>
      <ProjectCard
        name={"name"}
        image={"news-homepage.png"}
        technologies={[ "react", "typescript", "html5", "css3", "nodejs"]}
        repoUrl={
          "https://github.com/bschlademann/frontend_mentor_-_news_homepage"
        }
        liveUrl={
          "https://bschlademann.github.io/frontend_mentor_-_news_homepage/"
        }
      />
    </>
  );
}

export default App;
