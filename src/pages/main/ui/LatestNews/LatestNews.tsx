import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./LatestNews.module.scss";
import { ListWithSkeleton } from "@/widgets/news/ui";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={styles.section}>
      <ListWithSkeleton
        isLoading={isLoading}
        type="banner"
        direction="row"
        items={data && data.news}
      />
    </section>
  );
};
