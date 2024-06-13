import TypeInvertedHeroWithFullS from "../components/TypeInvertedHeroWithFullS";
import TypeThreeFeatureCards from "../components/TypeThreeFeatureCards";
import TypeMobileDeviceMockupBene from "../components/TypeMobileDeviceMockupBene";
import Property1Testimonials3Larg from "../components/Property1Testimonials3Larg";
import ColumnLeft from "../components/ColumnLeft";
import ColumnRight from "../components/ColumnRight";
import styles from "./DigitalForensicsToolsShowca.module.css";

const DigitalForensicsToolsShowca = () => {
  return (
    <div className={styles.digitalForensicsToolsShowca}>
      <div className={styles.typecenteredNavWithBrandO}>
        <div className={styles.brand}>
          <div className={styles.brandname}>Forensics GURU</div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.textContainer}>
            <div className={styles.cta}>Contact</div>
          </div>
        </div>
        <div className={styles.navLinks1}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Home</div>
          </div>
          <div className={styles.navLink1}>
            <div className={styles.navLabel1}>About</div>
          </div>
          <div className={styles.navLink2}>
            <div className={styles.navLabel2}>Services</div>
          </div>
        </div>
      </div>
      <TypeInvertedHeroWithFullS />
      <div className={styles.typebigStatementInverted}>
        <div className={styles.textContent}>
          <div className={styles.benefitHeading}>Our Mission</div>
          <div className={styles.heading}>
            We strive to empower digital crime fighters with cutting-edge
            forensics solutions.
          </div>
        </div>
      </div>
      <TypeThreeFeatureCards />
      <TypeMobileDeviceMockupBene />
      <Property1Testimonials3Larg />
      <div className={styles.property1listFormBoxed}>
        <div className={styles.container}>
          <ColumnLeft />
          <ColumnRight />
        </div>
      </div>
      <div className={styles.typestackedSimpleFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.brandContainer}>
              <div className={styles.brandname1}>Forensics GURU</div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.link}>About</div>
              <div className={styles.link1}>Services</div>
              <div className={styles.link2}>LinkedIn</div>
              <div className={styles.link3}>Contact</div>
            </div>
          </div>
        </div>
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.brandNameAll}>
              © 2024 Forensics GURU. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.link4}>Privacy Policy</div>
              <div className={styles.link5}>Terms of Service</div>
              <div className={styles.link6}>Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalForensicsToolsShowca;
