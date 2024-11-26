import { useAppDispatch } from "@/app/appStore";
import { CategoriesType } from "@/entities/category";
import { setFilters } from "@/entities/news/model/newsSlice";
import Categories from "@/features/category/ui/Categories/Categories";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";
import styles from "./NewsFilters.module.scss";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

export const NewsFilters = ({ filters, categories }: Props) => {
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
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            handleSelectedCategories={handleSelectedCategories}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search handleSetKeyword={handleSetKeyword} keyword={filters.keywords} />
    </div>
  );
};
