import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

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
export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
