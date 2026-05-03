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
}: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Ensure currentPage stays within bounds
    const safePage = Math.min(Math.max(currentPage, 1), totalPages);

    const setPage = (page: number) => {
        setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    };

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    //   indexes
    const startIndex = (safePage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    // UI helpers
    const displayStart = totalItems === 0 ? 0 : startIndex + 1;
    const displayEnd = endIndex;
    const itemsOnCurrentPage = endIndex - startIndex;

    return {
        currentPage: safePage,
        totalPages,
        startIndex,
        endIndex,
        displayStart,
        displayEnd,
        itemsOnCurrentPage,


        setPage,
        nextPage,
        prevPage,
        canNextPage: safePage < totalPages,
        canPrevPage: safePage > 1,
    };
};
export default usePagination;