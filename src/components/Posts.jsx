import React, { useContext } from "react";
import { usePost } from "../ContextApi/PostContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts } = usePost();
  if (posts.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <Link to={`${post.id}`} key={post.id}>
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
