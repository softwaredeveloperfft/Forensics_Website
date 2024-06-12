import PropTypes from "prop-types";
import styles from "./ColumnLeft.module.css";

const ColumnLeft = ({ className = "" }) => {
  return (
    <div className={[styles.columnLeft, className].join(" ")}>
      <div className={styles.copy}>
        <h1 className={styles.heading}>Get in touch</h1>
        <h3 className={styles.description}>
          We’re here to help with any inquiries.
        </h3>
      </div>
      <div className={styles.feature01}>
        <img
          className={styles.iconIcon}
          loading="lazy"
          alt=""
          src="/icon--icon-3.svg"
        />
        <div className={styles.featureCopy}>
          <div className={styles.featureTitle}>Email</div>
          <div className={styles.featureDescription}>
            info@forensicsguru.com
          </div>
        </div>
      </div>
      <div className={styles.feature011}>
        <img className={styles.iconIcon1} alt="" src="/icon--icon-4.svg" />
        <div className={styles.featureCopy1}>
          <div className={styles.featureTitle1}>Phone</div>
          <div className={styles.featureDescription1}>+1 (800) 123-4567</div>
        </div>
      </div>
      <div className={styles.feature012}>
        <img
          className={styles.iconIcon2}
          loading="lazy"
          alt=""
          src="/icon--icon-5.svg"
        />
        <div className={styles.featureCopy2}>
          <div className={styles.featureTitle2}>Location</div>
          <div className={styles.featureDescription2}>
            1234 Forensics St, Tech City, Country
          </div>
        </div>
      </div>
    </div>
  );
};

ColumnLeft.propTypes = {
  className: PropTypes.string,
};

export default ColumnLeft;
