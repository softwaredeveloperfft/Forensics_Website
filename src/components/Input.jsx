import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  className = "",
  label,
  placeholderText,
  inputMinHeight,
  inputFormPadding,
  inputFormHeight,
  placeholderTextWidth,
}) => {
  const inputStyle = useMemo(() => {
    return {
      minHeight: inputMinHeight,
    };
  }, [inputMinHeight]);

  const inputFormStyle = useMemo(() => {
    return {
      padding: inputFormPadding,
      height: inputFormHeight,
    };
  }, [inputFormPadding, inputFormHeight]);

  const placeholderTextStyle = useMemo(() => {
    return {
      width: placeholderTextWidth,
    };
  }, [placeholderTextWidth]);

  return (
    <div className={[styles.input, className].join(" ")} style={inputStyle}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputForm} style={inputFormStyle}>
        <div className={styles.textContainer}>
          <div className={styles.placeholderText} style={placeholderTextStyle}>
            {placeholderText}
          </div>
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholderText: PropTypes.string,

  /** Style props */
  inputMinHeight: PropTypes.any,
  inputFormPadding: PropTypes.any,
  inputFormHeight: PropTypes.any,
  placeholderTextWidth: PropTypes.any,
};

export default Input;
