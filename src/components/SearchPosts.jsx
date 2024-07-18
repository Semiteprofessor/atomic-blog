import React, { useContext } from "react";
import { usePost } from "../ContextApi/PostContext";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePost();
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
