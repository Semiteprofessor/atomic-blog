import React, { useContext } from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { PostContext } from "../ContextApi/PostContext";

const Header = () => {
  const { onClearPosts } = useContext(PostContext);
  return (
    <header className="header">
      <h1>
        <span>⚛️</span>Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
      </div>
      <button className="clear-post" onClick={onClearPosts}>
        Clear Posts
      </button>
    </header>
  );
};

export default Header;
