import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";
import styles from "./Main.module.scss";

// interface MainProps {}

export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
