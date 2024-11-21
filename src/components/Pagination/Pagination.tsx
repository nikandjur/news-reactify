import { IPaginationProps } from "../../interfaces";
import styles from "./Pagination.module.scss";

// interface PaginationProps {}

export const Pagination = ({
  currentPage,
  totalPages,
  handleClickPage,
  handleNextPage,
  handlePreviousPage,
}: IPaginationProps) => (
  <div className={styles.pagination}>
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
