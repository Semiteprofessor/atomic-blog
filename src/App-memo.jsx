import { Route, Routes } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import { PostProvider } from "./ContextApi/PostContext";
import "./App.css";
import Landing from "./components/Landing";

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/single" element={<SinglePost />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
