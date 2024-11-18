import { getLatestNews } from "../../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from "./LatestNews.module.scss";

// interface LatestNewsProps {}

export const LatestNews = () => {
  const { data, isLoading, error } = useFetch(getLatestNews);
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        isLoading={isLoading}
        banners={data && data.news}
      />
    </section>
  );
};
