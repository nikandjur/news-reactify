import { getNews } from "../../../api/apiNews";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";
import { PAGE_SIZE } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import styles from "./Main.module.scss";

// interface MainProps {}

export const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyword = useDebounce(filters.keywords, 1500);

  const { data, isLoading, error } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyword,
  });
  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters
        isLoading={isLoading}
        changeFilters={changeFilters}
        data={data}
        filters={filters}
      />
    </main>
  );
};
