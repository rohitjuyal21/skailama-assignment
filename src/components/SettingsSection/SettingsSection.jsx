import { useState } from "react";
import styles from "./SettingsSection.module.css";
const SettingsSection = () => {
  const [image, setImage] = useState("");

  return (
    <div className={styles.settingsSection}>
      <h2 className="title-medium">Account Settings</h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {image ? (
            <img src={image} alt="Bot Icon" className={styles.image} />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full"></div>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" className="input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
