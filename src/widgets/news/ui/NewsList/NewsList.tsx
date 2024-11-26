import { INews } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./NewsList.module.scss";
import { NewsCard } from "@/entities/news/ui/NewsCard/NewsCard";

interface Props {
  items?: INews[];
  type?: "item" | "banner";
  direction?: "row" | "column";
}

const NewsList = ({ items, type = "item" }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {items?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
};
const ListWithSkeleton = withSkeleton<Props>(NewsList, 10);
export default ListWithSkeleton;
