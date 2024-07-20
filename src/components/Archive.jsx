import React, { useState } from "react";

const Archive = ({ show }) => {
  // const [posts] = useState(() =>
  //   Array.from({ length: 10000 }, () => createRandomPost())
  // );

  const [showArchive, setShowArchive] = useState(show);
  return (
    <aside>
      <h2>Post Archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {/* {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
            </li>
          ))} */}
        </ul>
      )}
    </aside>
  );
};

export default Archive;
