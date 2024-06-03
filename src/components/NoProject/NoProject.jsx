import { Home, PlusCircle } from "lucide-react";
import styles from "./NoProject.module.css";
import podcast from "../../assets/images/podcast.svg";

const NoProjects = ({ handleOpenModal }) => {
  return (
    <div className={styles.noProjects}>
      <div>
        <button className="btn btn-badge">
          <Home />
          Back to Home
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.noProjectTitle}>Create a New Project</h1>
        <img src={podcast} alt="" />
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
          soluta? Mollitia, excepturi? Saepe doloribus quis, quidem neque nulla
          totam asperiores numquam exercitationem. Illum voluptates amet iusto
          vero sed sint natus.
        </p>
        <button onClick={handleOpenModal} className="btn btn-large btn-primary">
          <PlusCircle size={56} />
          Create New Project
        </button>
      </div>
    </div>
  );
};

export default NoProjects;
