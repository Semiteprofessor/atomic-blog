import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "../components/Header";
import Main from "../components/Main";
import Archive from "../components/Archive";
import Footer from "../components/Footer";

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

const Landing = () => {
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
    <section>
      <button
        className="mode"
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      >
        {isFakeDark ? "*" : "🌙"}
      </button>

      <Header />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive show={true} />
      <Footer />
    </section>
  );
};

export default Landing;
