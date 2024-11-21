import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slice/newsSlice";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { NewsListWithSkeleton } from "../NewsList/NewsList";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import styles from "./NewsByFilters.module.scss";

type Navigation = number | "next" | "prev";

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const dispatch = useAppDispatch();
  const debouncedKeyword = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyword,
  });

  const handleNavigation = (params: Navigation) => {
    if (params === "next" && filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
      return;
    }
    if (params === "prev" && filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
      return;
    }
    if (typeof params === "number" && params >= 1) {
      dispatch(setFilters({ key: "page_number", value: params }));
      return;
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleClickPage={handleNavigation}
        handleNextPage={handleNavigation}
        handlePreviousPage={handleNavigation}
      >
        <NewsListWithSkeleton news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};
