import { useState } from "react";

const usePagination = () => {
  const [currPage, setCurrPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  return { 
    currPage, setCurrPage, postsPerPage, lastPostIndex, firstPostIndex
  }
};

export default usePagination;
