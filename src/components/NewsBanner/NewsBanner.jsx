import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { Image } from "../Image";
import styles from "./NewsBanner.module.scss";

// interface HeaderProps {}

export const NewsBanner = ({ item }) => {
  if (!item) return null;
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title || "not title"}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};
