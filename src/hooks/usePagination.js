import { useState } from "react";
import useFetch from "./useFetch";

const usePagination = () => {
  const { products } = useFetch();
  const [currPage, setCurrPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  
  let pages = [];
  const totalPosts = products.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return { 
    currPage, setCurrPage, postsPerPage, lastPostIndex, firstPostIndex, pages
  }
};

export default usePagination;
