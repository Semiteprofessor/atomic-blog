import React, { useContext } from "react";
import { PostContext } from "../ContextApi/PostContext";

const Posts = () => {
  const { posts } = useContext(PostContext);
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
