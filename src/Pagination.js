import React from "react";

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {goToPreviousPage && (
        <button onClick={goToPreviousPage} className="button">
          Prev
        </button>
      )}
      {goToNextPage && (
        <button onClick={goToNextPage} className="button">
          Next
        </button>
      )}
    </div>
  );
}
