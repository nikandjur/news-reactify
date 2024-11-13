import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner";
import styles from "./Main.module.scss";

import { NewsList } from "../../components/NewsList/NewsList";
import { getCategories, getNews } from "../../../api/apiNews";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";

// interface MainProps {}

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "ALL" ? null : selectedCategory,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["ALL", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectedCategories = (category) => {
    setSelectedCategory(category);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages)
      setCurrentPage((prevCurrenPage) => prevCurrenPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevCurrenPage) => prevCurrenPage - 1);
  };
  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        handleSelectedCategories={handleSelectedCategories}
        selectedCategory={selectedCategory}
      />
      {!isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleClickPage={handleClickPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleClickPage={handleClickPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </main>
  );
};
