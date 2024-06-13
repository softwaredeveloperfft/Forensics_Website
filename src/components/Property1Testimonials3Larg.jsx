import Testimonial from "./Testimonial";
import PropTypes from "prop-types";
import styles from "./Property1Testimonials3Larg.module.css";

const Property1Testimonials3Larg = ({ className = "" }) => {
  return (
    <div className={[styles.property1testimonials3Larg, className].join(" ")}>
      <div className={styles.heading}>
        <p className={styles.whatOurClients}>What our Clients are</p>
        <p className={styles.sayingAboutUs}>saying about us!</p>
      </div>
      <div className={styles.testimonialsGrid}>
        <Testimonial
          shortTestimonial="“Forensics GURU’s tools transformed our investigations. Highly recommended!”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars@2x.png"
          name1="Delhi Police"
          companyJobTitle="Detective, Cyber Crimes Unit"
        />
        <Testimonial
          shortTestimonial="“Exceptional support and powerful tools. Forensics GURU is our go-to.”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars@2x.png"
          name1="Tamil Nadu Police"
          companyJobTitle="Private Investigator"
        />
        <Testimonial
          shortTestimonial="“Reliable and efficient forensic solutions. A game-changer for our team.”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars@2x.png"
          name1="Haryana Police"
          companyJobTitle="Forensic Analyst"
        />
      </div>
    </div>
  );
};

Property1Testimonials3Larg.propTypes = {
  className: PropTypes.string,
};

export default Property1Testimonials3Larg;
