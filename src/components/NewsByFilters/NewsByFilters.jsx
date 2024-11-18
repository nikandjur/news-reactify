import { TOTAL_PAGES } from "../../constants/constants";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { NewsListWithSkeleton } from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./NewsByFilters.module.scss";

// interface NewsByFiltersProps {}

export const NewsByFilters = ({ changeFilters, filters, data, isLoading }) => {
  const handleNavigation = (params) => () => {
    if (params === "next" && filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1);
      return;
    }
    if (params === "prev" && filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
      return;
    }
    if (typeof params === "number" && params >= 1) {
      changeFilters("page_number", params);
      return;
    }
  };
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />
      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleClickPage={handleNavigation}
        handleNextPage={handleNavigation("next")}
        handlePreviousPage={handleNavigation("prev")}
      />

      <NewsListWithSkeleton news={data?.news} isLoading={isLoading} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleClickPage={handleNavigation}
        handleNextPage={handleNavigation("next")}
        handlePreviousPage={handleNavigation("prev")}
      />
    </section>
  );
};
