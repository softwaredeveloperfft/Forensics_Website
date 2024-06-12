import BigCard from "./BigCard";
import PropTypes from "prop-types";
import styles from "./TypeThreeFeatureCards.module.css";

const TypeThreeFeatureCards = ({ className = "" }) => {
  return (
    <section className={[styles.typethreeFeatureCards, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Discover Our Tools</h1>
          <div className={styles.subheading}>
            Advanced solutions for digital investigations.
          </div>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.bigCardParent}>
            <BigCard
              subheading="Innovative Forensics"
              heading="Explore our comprehensive suite of forensic tools"
              text="Designed for precision."
              cTA="Explore Now"
              imageLummi="/image--lummi-1@2x.png"
            />
            <BigCard
              subheading="Comprehensive Solutions"
              heading="Tailored tools for every digital investigation need"
              text="Engineered for efficiency."
              cTA="Get Started"
              imageLummi="/image--lummi-2@2x.png"
              propPadding="var(--padding-45xl) var(--padding-13xl)"
              propHeight="117px"
            />
          </div>
          <div className={styles.bigCard}>
            <div className={styles.content1}>
              <div className={styles.contentContainer}>
                <div className={styles.subheading1}>Expert Support</div>
                <div className={styles.content2}>
                  <h1 className={styles.heading1}>
                    We provide unparalleled support for all your forensic tools.
                  </h1>
                  <div className={styles.text}>Always ready to assist.</div>
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.button}>
                  <div className={styles.cta1}>Contact Us</div>
                </div>
              </div>
            </div>
            <img
              className={styles.imageLummi}
              loading="lazy"
              alt=""
              src="/image--lummi-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

TypeThreeFeatureCards.propTypes = {
  className: PropTypes.string,
};

export default TypeThreeFeatureCards;
