import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import React from "react";

type Navigation = number | "next" | "prev";

export const usePaginationNews = ({ filters }: IFilters) => {
  const dispatch = useAppDispatch();

  const handleNavigation = (params: Navigation) => {
    if (params === "next" && filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
      return;
    }
    if (params === "prev" && filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
      return;
    }
    if (typeof params === "number" && params >= 1) {
      dispatch(setFilters({ key: "page_number", value: params }));
      return;
    }
  };
  return { handleNavigation };
};
