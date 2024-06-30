import React from "react";

const FormAddPost = ({ onAddPost }) => {
  return (
    <form className="form">
      <input type="text" placeholder="Post title" />
      <input type="text" placeholder="Post body" className="body"/>
      <button className="add-post" type="submit" onClick={onAddPost}>
        Add Post
      </button>
    </form>
  );
};

export default FormAddPost;
