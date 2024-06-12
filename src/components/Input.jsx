import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ className = "", label, textContainerPlaceholder }) => {
  return (
    <div className={[styles.input, className].join(" ")}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputForm}>
        <input
          className={styles.textContainer}
          placeholder={textContainerPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  textContainerPlaceholder: PropTypes.string,
};

export default Input;
