import styles from "./ProjectCard.module.css";
import { getInitials } from "../../utils/getInitials";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`projects/${project.id}/upload`}>
      <div className={styles.projectCard}>
        <div
          className={styles.projectAvatar}
          style={{ backgroundColor: project.color }}
        >
          {getInitials(project.name)}
        </div>
        <div className={styles.projectDetails}>
          <div>
            <h4 className={styles.projectName}>{project.name}</h4>
            <span className={styles.projectEpisodes}>
              {project.episodes} Episodes
            </span>
          </div>
          <span className={styles.projectLastEdited}>
            Last edited {project.lastEdited}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
