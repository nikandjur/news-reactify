import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsFilters } from "@/widgets/news/ui";
import { NewsListWithPagination } from "../NewsListWithPagination/NewsListWithPagination";
import styles from "./NewsByFilters.module.scss";

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination isLoading={isLoading} filters={filters} />
    </section>
  );
};
