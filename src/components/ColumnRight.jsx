import Input from "./Input";
import PropTypes from "prop-types";
import styles from "./ColumnRight.module.css";

const ColumnRight = ({ className = "" }) => {
  return (
    <div className={[styles.columnRight, className].join(" ")}>
      <Input label="Name" placeholderText="Your Name" />
      <Input
        label="Email"
        placeholderText="Your Email"
        inputMinHeight="unset"
        inputFormPadding="var(--padding-mini) var(--padding-base)"
        inputFormHeight="unset"
        placeholderTextWidth="65px"
      />
      <Input
        label="Message"
        placeholderText="Your Message"
        inputMinHeight="200px"
        inputFormPadding="0px 16px"
        inputFormHeight="174px"
        placeholderTextWidth="86px"
      />
      <div className={styles.button}>
        <div className={styles.textContainer}>
          <div className={styles.cta}>Submit</div>
        </div>
      </div>
    </div>
  );
};

ColumnRight.propTypes = {
  className: PropTypes.string,
};

export default ColumnRight;
