import { getNews } from "../../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsApiResponse, ParamsType } from "../../interfaces";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { NewsListWithSkeleton } from "../NewsList/NewsList";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import styles from "./NewsByFilters.module.scss";

type Navigation = number | "next" | "prev";

interface Props {
  isDark: boolean;
}

export const NewsByFilters = ({ isDark }: Props) => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyword = useDebounce(filters.keywords, 1500);

  const { data, isLoading, error } = useFetch<NewsApiResponse, ParamsType>(
    getNews,
    {
      ...filters,
      keywords: debouncedKeyword,
    }
  );

  const handleNavigation = (params: Navigation) => {
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
      <NewsFilters
        isDark={isDark}
        filters={filters}
        changeFilters={changeFilters}
      />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleClickPage={handleNavigation}
        handleNextPage={handleNavigation}
        handlePreviousPage={handleNavigation}
        isDark={isDark}
      >
        <NewsListWithSkeleton news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};
