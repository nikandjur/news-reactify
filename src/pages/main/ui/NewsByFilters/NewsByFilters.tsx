import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Pagination } from "@/features/pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import NewsListWithSkeleton from "@/widgets/news/ui/NewsList/NewsList";
import { NewsFilters } from "../NewsFilters/NewsFilters";
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

      <Pagination
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleClickPage={handleNavigation}
        handleNextPage={handleNavigation}
        handlePreviousPage={handleNavigation}
      >
        <NewsListWithSkeleton news={data?.news} isLoading={isLoading} />
      </Pagination>
    </section>
  );
};
