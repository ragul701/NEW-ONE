import React from 'react'

const Post = () => {
  return (
    <main>
      <h1>New Post</h1>

      <form>
        <label>Title:</label>
        <input type="text" placeholder="Enter title" />

        <br />
        <br />

        <label>Post:</label>
        <textarea placeholder="Write your post"></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default Post