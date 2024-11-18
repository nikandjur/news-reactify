import withSkeleton from "../../helpers/hocs/withSkeleton";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

// interface NewsListProps {}

const NewsList = ({ news }) => (
  <ul className={styles.list}>
    {news.map((el) => {
      return <NewsItem key={el.id} item={el} />;
    })}
  </ul>
);
export const NewsListWithSkeleton = withSkeleton(
  NewsList,
  "item",
  10,
  "column"
);
