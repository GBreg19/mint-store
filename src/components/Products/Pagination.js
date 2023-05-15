import React from "react";
import usePagination from "../../hooks/usePagination";
import Button from "../UI/Button";

const Pagination = () => {
  const { setCurrPage, pages } = usePagination();

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button key={index} onClick={() => setCurrPage(page)}>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
