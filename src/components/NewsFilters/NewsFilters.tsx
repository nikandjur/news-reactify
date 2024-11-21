import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slice/newsSlice";
import Categories from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./NewsFilters.module.scss";

interface Props {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesNewsQuery(null);
  const dispatch = useAppDispatch();

  const handleSetKeyword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    dispatch(setFilters({ key: "keywords", value: value }));
  };
  const handleSelectedCategories = (category: string | null) => {
    dispatch(setFilters({ key: "category", value: category }));
  };

  return (
    <div className={styles.filters}>
      {data?.categories ? (
        <Slider>
          <Categories
            categories={data.categories}
            handleSelectedCategories={handleSelectedCategories}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search handleSetKeyword={handleSetKeyword} keyword={filters.keywords} />
    </div>
  );
};
