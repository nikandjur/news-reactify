import styles from "./Skeleton.module.scss";

// interface SkeletonProps {}

export const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}) => {
  const items = [...Array(count)];
  // const items = [...Array(count).key()];

  return (
    <ul className={direction === "column" ? styles.columnList : styles.rowList}>
      {items.map((_, index) => (
        <li
          key={index}
          className={type === "banner" ? styles.banner : styles.item}
        ></li>
      ))}
    </ul>
  );
};
