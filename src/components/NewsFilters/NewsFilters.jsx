import { getCategories } from "../../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import styles from "./NewsFilters.module.scss";

// interface NewsFiltersProps {}

export const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  const handleSetKeyword = (e) => {
    const { value } = e.target;
    changeFilters("keywords", value);
  };
  const handleSelectedCategories = (category) => {
    changeFilters("category", category);
  };
  return (
    <div className={styles.filters}>
      {dataCategories.categories ? (
        <Categories
          categories={dataCategories.categories}
          handleSelectedCategories={handleSelectedCategories}
          selectedCategory={filters.category}
        />
      ) : null}
      <Search handleSetKeyword={handleSetKeyword} keyword={filters.keywords} />
    </div>
  );
};
