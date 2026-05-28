import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const addPost = (title, body) => {
    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts([...posts, newPost]);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={<Home posts={filteredPosts} />}
        />

        <Route
          path="/post"
          element={<NewPost addPost={addPost} />}
        />

        <Route path="/post/:id" element={<PostPage />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;