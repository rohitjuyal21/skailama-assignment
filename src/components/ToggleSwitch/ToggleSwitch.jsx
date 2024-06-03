import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ label, isChecked, toggleSwitch }) => (
  <div className={styles.toggleSwitch}>
    <div className="form-group">
      <label className={styles.label}>{label}</label>
      <span>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</span>
    </div>
    <div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleSwitch}
          id="toggleSwitch"
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>
);

export default ToggleSwitch;
