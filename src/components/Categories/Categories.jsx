import styles from "./Categories.module.scss";

// interface CategoriesProps {}

export const Categories = ({
  categories,
  handleSelectedCategories,
  selectedCategory,
}) => {
  const handleClick = (selectCategory) => () =>
    handleSelectedCategories(selectCategory);
  return (
    <div className={styles.categories}>
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
};
