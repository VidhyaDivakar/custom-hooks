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
}: 
export const usePagination = ({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}:  UsePaginationProps) => {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const [currentPage, setCurrentPage] = useState(initialPage);
        // Ensure currentPage stays within bounds
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);