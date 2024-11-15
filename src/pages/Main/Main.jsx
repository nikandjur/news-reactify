import { useState } from "react";
import { getCategories, getNews } from "../../../api/apiNews";
import { Categories } from "../../components/Categories/Categories";
import { NewsBannerWithSkeleton } from "../../components/NewsBanner";
import { NewsListWithSkeleton } from "../../components/NewsList/NewsList";
import { Pagination } from "../../components/Pagination/Pagination";
import { Search } from "../../components/Search/Search";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import styles from "./Main.module.scss";
import { useFilters } from "../../helpers/hooks/useFilters";

// interface MainProps {}

export const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyword = useDebounce(filters.keywords, 1500);

  const { data: dataCategories } = useFetch(getCategories);

  const { data, isLoading, error } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyword,
  });

  const handleSetKeyword = (e) => {
    const { value } = e.target;
    changeFilters("keywords", value);
  };
  const handleSelectedCategories = (category) => {
    changeFilters("category", category);
  };

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
    <main className={styles.main}>
      {dataCategories.categories ? (
        <Categories
          categories={dataCategories.categories}
          handleSelectedCategories={handleSelectedCategories}
          selectedCategory={filters.category}
        />
      ) : null}
      <Search handleSetKeyword={handleSetKeyword} keyword={filters.keywords} />

      <NewsBannerWithSkeleton
        item={data && data.news && data.news[0]}
        isLoading={isLoading}
      />

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
    </main>
  );
};
