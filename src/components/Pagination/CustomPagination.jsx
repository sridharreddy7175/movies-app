import React, { useState } from "react";
import Pagination from "react-js-pagination";

const CustomPagination = ({ setPage, numOfPages = 10, countResults }) => {
  // const [activePage, setActivePage] = useState(15);
  // console.log(countResults, "count")

  const handlePageChange = (page) => {
    console.log("page", page)
    setPage(page);
  };
  return (
    <div>
      <Pagination
        // activePage={activePage}
        itemsCountPerPage={numOfPages}
        totalItemsCount={countResults}
        pageRangeDisplayed={10}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CustomPagination;
