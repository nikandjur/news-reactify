import { LatestNews } from "./LatestNews/LatestNews";
import { NewsByFilters } from "./NewsByFilters/NewsByFilters";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
