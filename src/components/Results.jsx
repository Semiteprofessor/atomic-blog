import React, { useContext } from "react";
import { PostContext } from "../ContextApi/PostContext";

const Results = () => {
  const { posts } = useContext(PostContext);
  return <p className="result">{posts.length} atomic posts found</p>;
};

export default Results;
