import { useTheme } from "@/app/providers/ThemeProvider";
import { IPaginationProps } from "../../model/types";
import styles from "./PaginationButtons.module.scss";

export const PaginationButtons = ({
  currentPage,
  totalPages,
  handleClickPage,
  handleNextPage,
  handlePreviousPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        onClick={() => handlePreviousPage("prev")}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => handleClickPage(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => handleNextPage("next")}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
