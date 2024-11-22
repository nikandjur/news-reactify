export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: (page: "prev") => void;
  handleNextPage: (page: "next") => void;
  handleClickPage: (page: number) => void;
  currentPage: number;
}
