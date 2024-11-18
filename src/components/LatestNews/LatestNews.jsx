import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from "./LatestNews.module.scss";

// interface LatestNewsProps {}

export const LatestNews = ({ banners, isLoading }) => (
  <section className={styles.section}>
    <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
  </section>
);
