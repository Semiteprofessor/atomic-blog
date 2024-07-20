import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const BASE_URL = "http://localhost:8080";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = useCallback((post) => {
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((newPost) => setPosts((posts) => [...posts, newPost]))
      .catch((error) => console.error("Error adding post:", error));
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/posts`);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const fetchSingle = useCallback(async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost({});
    }
  }, []);

  const deletePost = useCallback(async (id) => {
    try {
      await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
      });
      setPosts((posts) => posts.filter((post) => post.id !== id));
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }, []);

  const handleClearPosts = () => {
    setPosts([]);
  };

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
      post,
      fetchSingle,
      deletePost,
    };
  }, [
    handleAddPost,
    searchQuery,
    searchedPosts,
    post,
    fetchSingle,
    deletePost,
  ]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePost };
