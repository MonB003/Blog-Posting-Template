import React, { useState } from "react";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
import "./App.css";

function App() {
  // Array of blog posts
  const [blogpost, setBlogPost] = useState([
    { title: "Title 1", message: "Hello there", author: "Name1" },
    { title: "Title 2", message: "Message content", author: "Name2" },
    {
      title: "Title 3",
      message:
        "This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph.",
      author: "Name3",
    },
  ]);

  // Default values of new post
  const [values, setValues] = useState({
    title: "",
    message: "",
    author: "",
  });

  // Layout for new post form
  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Title",
      label: "Title",
    },
    {
      id: 2,
      name: "message",
      type: "text",
      placeholder: "Type Message Here",
      label: "Message",
    },
    {
      id: 3,
      name: "author",
      type: "text",
      placeholder: "Author",
      label: "Author",
    },
  ];

  
  // Post object that stores user's input and gets added to the array of posts
  const createPost = {
    title: "",
    message: "",
    author: "",
  };

  // Method when button is clicked
  const handleSubmit = (e) => {
    // Doesn't refresh page
    e.preventDefault();

    // Store user's input
    createPost.title = values.title;
    createPost.message = values.message;
    createPost.author = values.author;

    // Add data to JSON array
    blogpost.push(createPost);
    console.log(blogpost);
  };

  // Update values of text fields for each category when user types something
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  // Page
  return (
    <div className="app">
      {/* HEADER */}
      <h1 id="blogHeader">Blogs</h1>
      <br />

      {/* NEW POST FORM */}
      <h2>Create a Post</h2>

      <div className="newpost">
        <form onSubmit={handleSubmit}>
          {/* Display new post for each text field category */}
          {inputs.map((input) => (
            <NewPostForm
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <br />

          <button id="createPostBtn">Create Post</button>
        </form>
      </div>

      <br />
      <br />

      {/* CURRENT POSTS */}
      <h2>Your Posts</h2>

      <div className="posts">
        {/* Display current posts */}
        {blogpost.map((post) => (
          <Post
            title={post.title}
            message={post.message}
            author={post.author}
          />
        ))}
      </div>

      <br />

      {/* FOOTER */}
      <footer id="footer">
        <hr />
        <p id="copyright"> &copy; Website made by Monica.</p>
      </footer>
    </div>
  );
}

export default App;
