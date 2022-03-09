import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Albums from './pages/Albums';
import Comments from './pages/Comments';
import Posts from './pages/Posts';
import Users from './pages/Users';
import User from './pages/User';
import UserInfo from './pages/UserInfo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* routes for different pages */}

        <Route path='/' element={<Users />} />
        <Route path='/users/:id' element={<UserInfo />} />
        <Route path='/user/:id/posts' element={<Posts />} />
        <Route path='/user/:id/albums' element={<Albums />} />
        <Route path='/posts/:id/comments' element={<Comments />} />
        <Route path='/add-user' element={<User />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
