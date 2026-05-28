import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost(title, body);

    setTitle("");
    setBody("");

    navigate("/");
  };

  return (
    <main>
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <label>Post:</label>
        <textarea
          placeholder="Write your post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;