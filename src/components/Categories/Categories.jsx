import { forwardRef } from "react";
import styles from "./Categories.module.scss";

// interface CategoriesProps {}

const Categories = forwardRef(
  ({ categories, handleSelectedCategories, selectedCategory }, ref) => {
    const handleClick = (selectCategory) => () =>
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
