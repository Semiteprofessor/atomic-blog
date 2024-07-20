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
        <div className="post" key={post.id}>
          <Link to={`${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
