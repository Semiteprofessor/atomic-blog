import React, { useContext } from "react";
import { usePost } from "../ContextApi/PostContext";

const Results = () => {
  const { posts } = usePost();
  return <p className="result">{posts.length} atomic posts found</p>;
};

export default Results;
