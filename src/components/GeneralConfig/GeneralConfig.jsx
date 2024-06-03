import styles from "./GeneralConfig.module.css";

const GeneralConfig = () => {
  return (
    <div className={styles.generalConfig}>
      <div className="form-group">
        <label htmlFor="chatbotName">Chatbot Name</label>
        <input
          type="text"
          id="chatbotName"
          name="chatbotName"
          className="input"
        />
        <span>Lorem ipsum dolor sit Lorem ipsum dolor sit</span>
      </div>
      <div className="form-group">
        <label htmlFor="welcomeMessage">Welcome Message</label>
        <input
          type="text"
          id="welcomeMessage"
          name="welcomeMessage"
          className="input"
        />
        <span>Lorem ipsum dolor sit Lorem ipsum dolor sit</span>
      </div>
      <div className="form-group">
        <label htmlFor="inputPlaceholder">Input Placeholder</label>
        <input
          type="text"
          id="inputPlaceholder"
          name="inputPlaceholder"
          className="input"
        />
        <span>Lorem ipsum dolor sit Lorem ipsum dolor sit</span>
      </div>
    </div>
  );
};

export default GeneralConfig;
