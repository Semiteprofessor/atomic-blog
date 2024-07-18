import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

import "./App.css";
import { PostProvider } from "./ContextApi/PostContext";

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

// Create a new context
const PostContext = createContext({});

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

  const handleAddPost = (post) => {
    setPosts((posts) => [...posts, post]);
  };

  // const newPost = {
  //   title: faker.lorem.words(3).join(" "),
  //   body: faker.lorem.paragraphs(3).join(" "),
  // };

  const handleClearPosts = () => {
    setPosts([]);
  };

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
        <Main posts={searchedPosts} onAddPost={handleAddPost} />
        <Archive onAddPost={handleAddPost} />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
