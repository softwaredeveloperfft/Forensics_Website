import PropTypes from "prop-types";
import styles from "./TypeMobileDeviceMockupBene.module.css";

const TypeMobileDeviceMockupBene = ({ className = "" }) => {
  return (
    <div className={[styles.typemobileDeviceMockupBene, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.benefitsHeader}>
          <div className={styles.heading}>Why Choose Us</div>
          <div className={styles.subheading}>
            Expertise and innovation in digital forensics.
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.listContainer}>
            <div className={styles.featureList}>
              <div className={styles.feature01}>
                <img className={styles.iconIcon} alt="" src="/icon--icon.svg" />
                <div className={styles.featureCopy}>
                  <div className={styles.featureTitle}>
                    CDAMS Call Data Analysis Management System
                  </div>
                  <div className={styles.featureDescription}>
                    Analyze and manage call data effectively.
                  </div>
                </div>
              </div>
              <div className={styles.feature02}>
                <img
                  className={styles.iconIcon1}
                  alt=""
                  src="/icon--icon.svg"
                />
                <div className={styles.featureCopy1}>
                  <div className={styles.featureTitle1}>{`IPDAMS `}</div>
                  <div className={styles.featureDescription1}>
                    Comprehensive internet protocol data analysis.
                  </div>
                </div>
              </div>
              <div className={styles.feature03}>
                <img
                  className={styles.iconIcon2}
                  alt=""
                  src="/icon--icon.svg"
                />
                <div className={styles.featureCopy2}>
                  <div className={styles.featureTitle2}>
                    Case Management System
                  </div>
                  <div className={styles.featureDescription2}>
                    Efficiently manage investigation case events.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.device}>
            <img
              className={styles.iphone14Starlight1}
              alt=""
              src="/iphone-14--starlight-1@2x.png"
            />
            <img
              className={styles.screenContentLummi}
              alt=""
              src="/screen-content--lummi@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TypeMobileDeviceMockupBene.propTypes = {
  className: PropTypes.string,
};

export default TypeMobileDeviceMockupBene;
