import styles from "./Skeleton.module.scss";

// interface SkeletonProps {}

export const Skeleton = ({ count = 1, type = "banner" }) => {
  const items = [...Array(count)];
  // const items = [...Array(count).key()];

  return (
    <ul className={styles.list}>
      {items.map((_, index) => (
        <li
          key={index}
          className={type === "banner" ? styles.banner : styles.item}
        ></li>
      ))}
    </ul>
  );
};
