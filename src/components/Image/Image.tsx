import styles from "./Image.module.scss";

interface Props {
  image: string;
}

export const Image = ({ image }: Props) => (
  <div className={styles.wrapper}>
    {image ? <img src={image} alt="news" className={styles.image} /> : null}
  </div>
);
