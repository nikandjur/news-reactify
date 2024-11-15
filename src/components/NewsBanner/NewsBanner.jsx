import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { Image } from "../Image";
import styles from "./NewsBanner.module.scss";

// interface HeaderProps {}

const NewsBanner = ({ item }) => {
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

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);
