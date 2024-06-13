import PropTypes from "prop-types";
import styles from "./ColumnLeft.module.css";

const ColumnLeft = ({ className = "" }) => {
  return (
    <div className={[styles.columnLeft, className].join(" ")}>
      <div className={styles.copy}>
        <div className={styles.heading}>Get in touch</div>
        <div className={styles.description}>
          We’re here to help with any inquiries.
        </div>
      </div>
      <div className={styles.feature01}>
        <img className={styles.iconIcon} alt="" src="/icon--icon-3.svg" />
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
          <div className={styles.featureDescription1}>+91 8527317000</div>
        </div>
      </div>
      <div className={styles.feature012}>
        <img className={styles.iconIcon2} alt="" src="/icon--icon-5.svg" />
        <div className={styles.featureCopy2}>
          <div className={styles.featureTitle2}>Location</div>
          <div className={styles.featureDescription2}>
            582, Sector 21 B Faridabad, Haryana
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
