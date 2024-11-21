import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
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
