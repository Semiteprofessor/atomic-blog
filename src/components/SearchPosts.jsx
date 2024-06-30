import React from "react";

const SearchPosts = ({ searchQuery, setSearchQuery }) => {
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
