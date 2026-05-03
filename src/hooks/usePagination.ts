import { useState } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}:  UsePaginationProps) => {

      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const [currentPage, setCurrentPage] = useState(initialPage);
        // Ensure currentPage stays within bounds
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const itemsOnCurrentPage = endIndex - startIndex + 1;

  const setPage = (pageNumber: number) => {
    const page = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(page);
  };
   const nextPage = () => {
    if (safePage < totalPages) {
      setCurrentPage(safePage + 1);
    }
  };
   const prevPage = () => {
    if (safePage > 1) {
      setCurrentPage(safePage - 1);
    }
  };

  return {
    currentPage: safePage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage: safePage < totalPages,
    canPrevPage: safePage > 1,
  };
  };
  export default usePagination;