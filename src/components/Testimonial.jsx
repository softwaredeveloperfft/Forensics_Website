import PropTypes from "prop-types";
import styles from "./Testimonial.module.css";

const Testimonial = ({
  className = "",
  shortTestimonial,
  imageLummiCategoryavatars,
  name1,
  companyJobTitle,
}) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <blockquote className={styles.shortTestimonial}>
        {shortTestimonial}
      </blockquote>
      <div className={styles.author}>
        <img
          className={styles.imageLummiCategoryavata}
          loading="lazy"
          alt=""
          src={imageLummiCategoryavatars}
        />
        <div className={styles.text}>
          <div className={styles.name}>{name1}</div>
          <div className={styles.companyJob}>{companyJobTitle}</div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
  shortTestimonial: PropTypes.string,
  imageLummiCategoryavatars: PropTypes.string,
  name1: PropTypes.string,
  companyJobTitle: PropTypes.string,
};

export default Testimonial;
