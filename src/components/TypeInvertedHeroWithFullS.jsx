import PropTypes from "prop-types";
import styles from "./TypeInvertedHeroWithFullS.module.css";

const TypeInvertedHeroWithFullS = ({ className = "" }) => {
  return (
    <div className={[styles.typeinvertedHeroWithFullS, className].join(" ")}>
      <div className={styles.copyContainer}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <div className={styles.heading}>Leading Digital Forensics</div>
            <div className={styles.subheading}>
              Your partner in digital crime investigation.
            </div>
          </div>
          <div className={styles.ctaButton}>
            <div className={styles.textContainer}>
              <div className={styles.cta}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageLummi} alt="" src="/image--lummi@2x.png" />
      </div>
    </div>
  );
};

TypeInvertedHeroWithFullS.propTypes = {
  className: PropTypes.string,
};

export default TypeInvertedHeroWithFullS;
