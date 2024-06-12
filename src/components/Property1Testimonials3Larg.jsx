import Testimonial from "./Testimonial";
import PropTypes from "prop-types";
import styles from "./Property1Testimonials3Larg.module.css";

const Property1Testimonials3Larg = ({ className = "" }) => {
  return (
    <section
      className={[styles.property1testimonials3Larg, className].join(" ")}
    >
      <h1 className={styles.heading}>
        <p className={styles.whatOurClients}>What our Clients are</p>
        <p className={styles.sayingAboutUs}>saying about us!</p>
      </h1>
      <div className={styles.testimonialsGrid}>
        <Testimonial
          shortTestimonial="“Forensics GURU’s tools transformed our investigations. Highly recommended!”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars@2x.png"
          name1="Sarah Connor"
          companyJobTitle="Detective, Cyber Crimes Unit"
        />
        <Testimonial
          shortTestimonial="“Exceptional support and powerful tools. Forensics GURU is our go-to.”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars-1@2x.png"
          name1="John Doe"
          companyJobTitle="Private Investigator"
        />
        <Testimonial
          shortTestimonial="“Reliable and efficient forensic solutions. A game-changer for our team.”"
          imageLummiCategoryavatars="/image-lummi-categoryavatars-2@2x.png"
          name1="Jane Smith"
          companyJobTitle="Forensic Analyst"
        />
      </div>
    </section>
  );
};

Property1Testimonials3Larg.propTypes = {
  className: PropTypes.string,
};

export default Property1Testimonials3Larg;
