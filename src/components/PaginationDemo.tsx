import { usePagination } from '../hooks/usePagination';

export const PaginationDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({ totalItems: items.length, itemsPerPage: 10 });

    const currentItems = items.slice(startIndex, endIndex + 1);

    return (
        <div>
            <h2>Pagination Demo</h2>
            <p>
                Page {currentPage} of {totalPages}
            </p>
            <ul>
                {currentItems.map((item) => (
                <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={nextPage} disabled={!canPrevPage}>
                Previous
            </button>
            <button onClick={nextPage} disabled={!canNextPage}>
                Next
            </button>

        </div>
    );
};