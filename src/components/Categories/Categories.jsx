import styles from "./Categories.module.scss";

// interface CategoriesProps {}

export const Categories = ({
  categories,
  handleSelectedCategories,
  selectedCategory,
}) => (
  <div className={styles.categories}>
    {categories.map((category) => {
      return (
        <button
          key={category}
          className={
            selectedCategory === category ? styles.active : styles.item
          }
          onClick={() => handleSelectedCategories(category)}
        >
          {category}
        </button>
      );
    })}
  </div>
);
