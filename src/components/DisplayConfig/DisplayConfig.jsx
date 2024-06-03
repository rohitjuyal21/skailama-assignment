import { useState } from "react";
import styles from "./DisplayConfig.module.css";

import ColorPicker from "../ColorPicker/ColorPicker";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ChatIconConfig from "../ChatIconConfig/ChatIconConfig";

const DisplayConfig = () => {
  const [primaryColor, setPrimaryColor] = useState("#1f39cd");
  const [fontColor, setFontColor] = useState("#000000");
  const [showSources, setShowSources] = useState(true);

  return (
    <div className={styles.displayConfig}>
      <div className={styles.displayTopConfigs}>
        <ColorPicker
          label="Primary Color"
          color={primaryColor}
          setColor={setPrimaryColor}
        />
        <ColorPicker
          label="Font Color"
          color={fontColor}
          setColor={setFontColor}
        />
        <div className="form-group">
          <label htmlFor="welcomeMessage">Font Size (in px)</label>
          <input
            type="text"
            id="welcomeMessage"
            name="welcomeMessage"
            className="input"
          />
          <span>Lorem ipsum dolor sit Lorem ipsum dolor sit</span>
        </div>
        <div className="form-group">
          <label htmlFor="welcomeMessage">
            Chat Height (in % of total screen)
          </label>
          <input
            type="text"
            id="welcomeMessage"
            name="welcomeMessage"
            className="input"
          />
          <span>Lorem ipsum dolor sit Lorem ipsum dolor sit</span>
        </div>
        <div className={styles.toggleWrapper}>
          <ToggleSwitch
            label="Show Sources"
            isChecked={showSources}
            toggleSwitch={() => setShowSources(!showSources)}
          />
        </div>
      </div>
      <hr className={styles.horizontal} />
      <ChatIconConfig />
    </div>
  );
};

export default DisplayConfig;
