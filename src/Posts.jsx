import { useState } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    const id = new Date().getTime().toString(); // id
    setPosts([...posts, { ...newPost, id }]); // новый пост с айдишником
  };

  return { posts, addPost };
}
