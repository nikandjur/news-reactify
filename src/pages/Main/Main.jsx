import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner";
import styles from "./Main.module.scss";
import { getNews } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";

// interface MainProps {}

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        console.log(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  if (news.length === 0) return null;
  return (
    <main className={styles.main}>
      <NewsBanner item={news} />
      <NewsList news={news} />
    </main>
  );
};
