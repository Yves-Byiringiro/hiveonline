import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/UsersSlice';
import postsReducer from './slices/PostsSlice';
import albumsReducer from './slices/AlbumsSlice';
import commentsReducer from './slices/CommentsSlice';

// Combining all reducers used in the project
const reducer = {
  users: usersReducer,
  posts:postsReducer,
  albums:albumsReducer,
  comments:commentsReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
