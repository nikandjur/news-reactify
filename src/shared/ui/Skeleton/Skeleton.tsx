import { DirectionType, SkeletonType } from "@/shared/interfaces";
import styles from "./Skeleton.module.scss";

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

export const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: Props) => {
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
