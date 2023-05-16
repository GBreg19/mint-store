import React from "react";
import usePagination from "../../hooks/usePagination";
import Button from "../UI/Button";

const Pagination = ({setCurrPage}) => {
  const { pages } = usePagination();

  return (
    <div className="w-1/2 m-auto pt-10 text-center">
      {pages.map((page, index) => {
        return (
          <Button key={index} onClick={() => setCurrPage(page)} className='mr-2'>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
