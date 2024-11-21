import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces";
import styles from "./NewsItem.module.scss";

interface Props {
  item: INews;
}

export const NewsItem = ({ item }: Props) => (
  <li className={styles.newsItem}>
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${item.image})` }}
    ></div>
    <div className={styles.info}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  </li>
);