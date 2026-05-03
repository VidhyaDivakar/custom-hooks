import { useState } from "react";
import { usePagination } from '../hooks/usePagination';

export const PaginationDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageInput, setPageInput] = useState("");
  
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    setPage,
    canNextPage,
    canPrevPage,
  } = usePagination({ totalItems: items.length, itemsPerPage,});

    const currentItems = items.slice(startIndex, endIndex + 1);

    return (
          <div style={{ padding: 20 }}>
            <h2> Pagination Demo </h2>

      {/* Top navigation */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label>Items per page: </label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div>Total Items: {items.length}</div>
      </div>

      {/* PAGE INFO */}
      <h4>
        Pages {currentPage} of {totalPages}
      </h4>

      {/* INPUT + STEP CONTROL */}
      <div>
        <button onClick={prevPage} disabled={!canPrevPage}>
          -
        </button>

        <input
          value={pageInput}
          placeholder="Go to page"
          onChange={(e) => setPageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPage(Number(pageInput));
              setPageInput("");
            }
          }}
        />

        <button onClick={nextPage} disabled={!canNextPage}>
          +
        </button>
      </div>

      {/* STATUS TEXT */}
      <p>
        Showing items {startIndex + 1} - {endIndex} (Total on this page:{" "}
        {currentItems.length})
      </p>

      {/* ITEMS */}
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* PAGE NUMBERS */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setPage(page)}
              style={{
                padding: "4px 8px",
                background: page === currentPage ? "skyblue" : "white",
                border: "1px solid black",
                cursor: "pointer",
              }}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* NAV BUTTONS */}
      <div style={{ marginTop: 10 }}>
        <button onClick={prevPage} disabled={!canPrevPage}>
          Previous
        </button>

        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
    );
};