import React from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

const Header = ({ posts, onClearPosts, searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <h1>
        <span>⚛️</span>Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <button className="clear-post" onClick={onClearPosts}>Clear Posts</button>
    </header>
  );
};

export default Header;
