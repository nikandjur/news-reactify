import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./Search.module.scss";

interface Props {
  keyword: string;
  handleSetKeyword: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Search = ({ keyword, handleSetKeyword }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        className={styles.input}
        type="text"
        value={keyword}
        onChange={handleSetKeyword}
        placeholder="search"
      />
    </div>
  );
};
