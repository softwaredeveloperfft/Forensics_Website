import Input from "./Input";
import PropTypes from "prop-types";
import styles from "./ColumnRight.module.css";

const ColumnRight = ({ className = "" }) => {
  return (
    <div className={[styles.columnRight, className].join(" ")}>
      <Input label="Name" textContainerPlaceholder="Your Name" />
      <Input label="Email" textContainerPlaceholder="Your Email" />
      <div className={styles.input}>
        <div className={styles.label}>Message</div>
        <textarea
          className={styles.inputForm}
          placeholder="Your Message"
          rows={9}
          cols={24}
        />
      </div>
      <button className={styles.button}>
        <div className={styles.textContainer}>
          <div className={styles.cta}>Submit</div>
        </div>
      </button>
    </div>
  );
};

ColumnRight.propTypes = {
  className: PropTypes.string,
};

export default ColumnRight;
