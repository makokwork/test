// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CreateBlogPage from './pages/CreateBlogPage';
import { usePosts } from './Posts';

function App() {
  const { posts, addPost } = usePosts();
  console.log('СМОТРИ СЮДА', posts);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Blog posts={posts} />} />
        <Route path="/create" element={<CreateBlogPage addPost={addPost} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
