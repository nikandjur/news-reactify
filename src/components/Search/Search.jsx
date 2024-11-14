import styles from "./Search.module.scss";

// interface SearchProps {}

export const Search = ({ keyword, handleSetKeyword }) => (
  <div className={styles.search}>
    <input
      className={styles.input}
      type="text"
      value={keyword}
      onChange={handleSetKeyword}
      placeholder="search"
    />
  </div>
);
