// BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogPost.css';
function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <div className="read-more">Читать далее</div>
    </div>
  );
}

export default BlogPost;
