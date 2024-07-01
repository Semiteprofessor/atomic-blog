import { createContext, useEffect, useState } from "react";
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

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

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
