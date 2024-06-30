import { useState } from "react";
import { faker } from "@faker-js/faker";

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};
function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQUery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  console.log(posts);

  return <div>Hello</div>;
}

export default App;
