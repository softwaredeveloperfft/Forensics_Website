import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BigCard.module.css";

const BigCard = ({
  className = "",
  subheading,
  heading,
  text,
  cTA,
  imageLummi,
  propPadding,
  propHeight,
}) => {
  const contentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const headingStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.bigCard, className].join(" ")}>
      <div className={styles.content} style={contentStyle}>
        <div className={styles.contentContainer}>
          <div className={styles.subheading}>{subheading}</div>
          <div className={styles.content1}>
            <h1 className={styles.heading} style={headingStyle}>
              {heading}
            </h1>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.button}>
            <div className={styles.cta1}>{cTA}</div>
          </div>
        </div>
      </div>
      <img
        className={styles.imageLummi}
        loading="lazy"
        alt=""
        src={imageLummi}
      />
    </div>
  );
};

BigCard.propTypes = {
  className: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  cTA: PropTypes.string,
  imageLummi: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
};

export default BigCard;
