import { Pagination } from "@/features/pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import ListWithSkeleton from "@/widgets/news/ui/NewsList/NewsList";
import { INews } from "@/entities/news";
import { IFilters } from "@/shared/interfaces";
import { usePaginationNews } from "../../utils/hook/usePaginationNews";
import { useAppSelector } from "@/app/appStore";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

export const NewsListWithPagination = ({ filters, isLoading }: Props) => {
  const { handleNavigation } = usePaginationNews(filters);

  const news = useAppSelector((state) => state.news.news);

  return (
    <Pagination
      top
      bottom
      currentPage={filters.page_number}
      totalPages={TOTAL_PAGES}
      handleClickPage={handleNavigation}
      handleNextPage={handleNavigation}
      handlePreviousPage={handleNavigation}
    >
      <ListWithSkeleton
        type="item"
        direction="column"
        items={news}
        isLoading={isLoading}
      />
    </Pagination>
  );
};
