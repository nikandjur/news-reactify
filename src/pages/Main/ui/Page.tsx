import { LatestNews } from "./LatestNews/LatestNews";
import { NewsByFilters } from "./NewsByFilters/NewsByFilters";
import styles from "./Page.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
