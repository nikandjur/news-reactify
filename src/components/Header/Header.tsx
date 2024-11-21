import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.scss";

// interface HeaderProps {}

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>NEWS</h1>
    <p className={styles.date}>{formatDate(new Date())}</p>
  </header>
);
