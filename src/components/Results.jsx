import React, { useContext } from "react";
import { usePosts } from "../ContextApi/PostContext";

const Results = () => {
  const { posts } = usePosts();
  return <p className="result">{posts.length} atomic posts found</p>;
};

export default Results;
