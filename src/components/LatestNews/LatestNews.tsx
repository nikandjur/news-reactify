import { getLatestNews } from "../../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from "./LatestNews.module.scss";

export const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        isLoading={isLoading}
        banners={data && data.news}
      />
    </section>
  );
};
