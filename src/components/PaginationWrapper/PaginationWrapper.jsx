import { Pagination } from "../Pagination/Pagination";
import styles from "./PaginationWrapper.module.scss";

// interface PaginationWrapperProps {}

export const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};
