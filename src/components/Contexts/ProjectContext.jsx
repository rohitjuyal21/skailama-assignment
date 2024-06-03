import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectFiles, setProjectFiles] = useState([
    {
      id: uuidv4().slice(0, 8),
      name: "hey",
      description: "Hello",
      status: "Done",
      createdAt: new Date(),
    },
  ]);
  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, projectFiles, setProjectFiles }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
