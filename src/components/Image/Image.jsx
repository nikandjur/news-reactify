import styles from "./Image.module.scss";

// interface ImageProps {}

export const Image = ({ image }) => (
  <div className={styles.wrapper}>
    {image ? <img src={image} alt="news" className={styles.image} /> : null}
  </div>
);
