import React, { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key: string, value: number | string | null) => {
    // setFilters(prev => ({ ...prev, [key]: value })
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilters };
};
