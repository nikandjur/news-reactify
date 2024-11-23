import { IFilters } from "@/shared/interfaces";
import styles from "./NewsFilters.module.scss";
import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/category/ui/Categories/Categories";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

interface Props {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
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
