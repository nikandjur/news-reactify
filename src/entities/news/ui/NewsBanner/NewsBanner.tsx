import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import styles from "./NewsBanner.module.scss";
import { Image } from "@/shared/ui/Image";

interface Props {
  item: INews;
}

export const NewsBanner = ({ item }: Props) => {
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
