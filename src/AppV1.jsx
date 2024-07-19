import { createContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

import "./App.css";

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

// 1) CREATE A CONTEXT
const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  
  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <PostProvider>
      <section>
        <button
          className="mode"
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        >
          {isFakeDark ? "*" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
