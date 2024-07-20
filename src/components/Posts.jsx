import React, { useContext } from "react";
import { usePost } from "../ContextApi/PostContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts } = usePost();
  return (
    <div className="posts">
      <Link to="single">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Posts;
