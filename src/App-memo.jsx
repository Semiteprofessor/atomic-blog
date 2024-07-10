import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";



function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = useCallback(function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }, []);

  function handleClearPosts() {
    setPosts([]);
  }
  const handleToggleFakeDark = useCallback(function handleToggleFakeDark() {
    setIsFakeDark((prevIsFakeDark) =>!prevIsFakeDark);
  }, []);
}
export default App;
