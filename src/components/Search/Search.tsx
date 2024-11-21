import styles from "./Search.module.scss";

interface Props {
  keyword: string;
  handleSetKeyword: React.ChangeEventHandler<HTMLInputElement> | undefined;
  isDark: boolean;
}

export const Search = ({ keyword, handleSetKeyword, isDark }: Props) => (
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
