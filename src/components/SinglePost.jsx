import { useParams } from "react-router-dom";
import { usePosts } from "../ContextApi/PostContext";
import { useEffect } from "react";

const SinglePost = () => {
  const { id } = useParams();
  const { post, fetchSingle, deletePost } = usePosts();

  useEffect(() => {
    fetchSingle(id);
  }, [id, fetchSingle]);

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(id);
  };

  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => handleDelete}>Delete</button>
    </div>
  );
};

export default SinglePost;
