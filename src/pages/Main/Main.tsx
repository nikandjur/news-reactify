import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";
import styles from "./Main.module.scss";

interface Props {
  isDark: boolean;
}

export const Main = ({ isDark }: Props) => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters isDark={isDark} />
    </main>
  );
};
