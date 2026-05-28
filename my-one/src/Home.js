function Home({ posts }) {
  return (
    <main>
      <h1>Home</h1>

      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </main>
  );
}

export default Home;