import React from "react";
import usePagination from "../../hooks/usePagination";
import useFetch from "../../hooks/useFetch";
import Button from "../UI/Button";

const Pagination = () => {
  const { products } = useFetch();
  const { postsPerPage, setCurrPage, currPage } = usePagination();
  let pages = [];
  const totalPosts = products.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const onCurrPage = (page) => {
    setCurrPage(page);
  };
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button key={index} onClick={() => onCurrPage(page)}>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
