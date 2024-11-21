import { ForwardedRef, forwardRef } from "react";
import styles from "./Categories.module.scss";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories:CategoriesType[]
  selectedCategory: CategoriesType | null
  handleSelectedCategories: (selectCategory:CategoriesType |null) => void

}

const Categories = forwardRef(
  ({ categories, handleSelectedCategories, selectedCategory }:Props, ref:ForwardedRef<HTMLDivElement>) => {
    const handleClick = (selectCategory:CategoriesType |null) => () =>
      handleSelectedCategories(selectCategory);
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={handleClick(null)}
        >
          ALL
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              onClick={handleClick(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);
Categories.displayName = "Categories";

export default Categories;
