import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

// interface NewsListProps {}

export const NewsList = ({ news }) => (
  <ul className={styles.list}>
    {news.map((el) => {
      return <NewsItem key={el.id} item={el} />;
    })}
  </ul>
);
