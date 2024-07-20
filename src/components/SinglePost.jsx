import { useParams } from "react-router-dom";
import { usePost } from "../ContextApi/PostContext";
import { useEffect } from "react";

const SinglePost = () => {
  const { id } = useParams();
  const { post, fetchSingle } = usePost();

  //   useEffect(() => {
  //     fetchSingle(id);
  //   }, [id, fetchSingle]);
  //   console.log(post);

  //   const { title, body } = post;
  return <div>Helooooooooooooooooo</div>;
};

export default SinglePost;
