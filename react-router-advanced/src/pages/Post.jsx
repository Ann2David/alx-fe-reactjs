import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post Details</h2>
      <p>You are viewing post with ID: {postId}</p>
    </div>
  );
}

export default Post;