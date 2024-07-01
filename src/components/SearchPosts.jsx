import React, { useContext } from "react";
import { PostContext } from "../ContextApi/PostContext";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
      className="search-input"
    />
  );
};

export default SearchPosts;
