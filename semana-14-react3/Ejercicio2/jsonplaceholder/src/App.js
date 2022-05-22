import loader from "./spinning-circles.svg";
import "./App.css";
import { getPosts, createPost } from "./services";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts(setPosts);
    setLoading(false);
  }, []);
  useEffect(() => setLoading(false), [posts]);

  const updatePosts = (newPost) => setPosts([newPost, ...posts]);

  const submitPost = (e) => {
    setLoading(true);
    e.preventDefault();
    const { elements } = e.target;
    const data = {
      title: elements.title.value,
      body: elements.body.value,
      userId: elements.userId.value,
    };
    createPost(data, updatePosts);
  };

  return (
    <div className="App">
      <form onSubmit={submitPost}>
        <input
          name="title"
          id="title"
          placeholder="Title"
          type="text"
          required
        ></input>
        <textarea name="body" id="body" placeholder="Body" required></textarea>
        <input
          name="userId"
          id="userId"
          placeholder="ID"
          type="number"
          required
        ></input>
        {loading && <img src={loader} alt="loading" />}
        <button>Send</button>
      </form>

      {posts ? (
        <div className="articles">
          {posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      ) : (
        <img src={loader} alt="loading" />
      )}
    </div>
  );
}

export default App;
