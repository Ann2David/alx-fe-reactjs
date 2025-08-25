import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Advanced Routing" },
];

function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;