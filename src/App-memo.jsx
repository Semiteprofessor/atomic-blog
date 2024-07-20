import { Route, Routes } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import { PostProvider } from "./ContextApi/PostContext";
import "./App.css";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
