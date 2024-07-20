import React, { useCallback, useContext, useMemo, useState } from "react";
import { usePost } from "../ContextApi/PostContext";

const FormAddPost = () => {
  const { onAddPost } = usePost();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddPost({ title, body });
      setTitle("");
      setBody("");
    },
    [onAddPost, title, body]
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
        className="body"
      />
      <button className="add-post" type="submit" onClick={onAddPost}>
        Add Post
      </button>
    </form>
  );
};

export default FormAddPost;
