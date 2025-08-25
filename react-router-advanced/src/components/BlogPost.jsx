// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic parameter
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Currently viewing post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;