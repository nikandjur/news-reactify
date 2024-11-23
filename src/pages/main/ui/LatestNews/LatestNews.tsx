import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import BannersListWithSkeleton from "@/widgets/news/ui/BannersList/BannersList";
import styles from "./LatestNews.module.scss";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        isLoading={isLoading}
        banners={data && data.news}
      />
    </section>
  );
};
