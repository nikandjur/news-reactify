import { getCategories } from "../../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import Categories from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./NewsFilters.module.scss";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: number | string | null) => void;
}

export const NewsFilters = ({ filters, changeFilters }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  const handleSetKeyword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    changeFilters("keywords", value);
  };
  const handleSelectedCategories = (category: string | null) => {
    changeFilters("category", category);
  };
  return (
    <div className={styles.filters}>
      {dataCategories?.categories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            handleSelectedCategories={handleSelectedCategories}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search handleSetKeyword={handleSetKeyword} keyword={filters.keywords} />
    </div>
  );
};
