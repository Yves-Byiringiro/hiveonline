import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Albums from './pages/Albums';
import Comments from './pages/Comments';
import Posts from './pages/Posts';
import Users from './pages/Users';
import User from './pages/User';
import Post from './pages/Post';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/user/:id/posts' element={<Posts />} />
        <Route path='/user/:id/albums' element={<Albums />} />
        <Route path='/posts/:id/comments' element={<Comments />} />
        <Route path='/add-user' element={<User />} />
        <Route path='/add-post' element={<Post />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
