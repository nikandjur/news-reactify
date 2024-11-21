import styles from "./Search.module.scss";

interface Props {
  keyword: string;
  handleSetKeyword: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Search = ({ keyword, handleSetKeyword }: Props) => (
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
