import React, { useContext } from "react";
import { usePosts } from "../ContextApi/PostContext";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePosts();
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
