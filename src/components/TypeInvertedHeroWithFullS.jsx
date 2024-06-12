import PropTypes from "prop-types";
import styles from "./TypeInvertedHeroWithFullS.module.css";

const TypeInvertedHeroWithFullS = ({ className = "" }) => {
  return (
    <section
      className={[styles.typeinvertedHeroWithFullS, className].join(" ")}
    >
      <div className={styles.copyContainer}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Leading Digital Forensics</h1>
            <h3 className={styles.subheading}>
              Your partner in digital crime investigation.
            </h3>
          </div>
          <button className={styles.ctaButton}>
            <div className={styles.textContainer}>
              <div className={styles.cta}>Learn More</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageLummi}
          loading="lazy"
          alt=""
          src="/image--lummi@2x.png"
        />
      </div>
    </section>
  );
};

TypeInvertedHeroWithFullS.propTypes = {
  className: PropTypes.string,
};

export default TypeInvertedHeroWithFullS;
