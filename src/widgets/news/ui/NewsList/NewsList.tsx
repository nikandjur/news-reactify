import { INews, NewsItem } from "@/entities/news";
import styles from "./NewsList.module.scss";
import withSkeleton from "@/shared/hocs/withSkeleton";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => (
  <ul className={styles.list}>
    {news?.map((el) => {
      return <NewsItem key={el.id} item={el} />;
    })}
  </ul>
);
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
export default NewsListWithSkeleton;
