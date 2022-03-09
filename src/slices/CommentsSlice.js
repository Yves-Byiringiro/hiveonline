import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// I used slice as on of the methods of reduxjs toolkit library (new library for managing state)

// fetching comment data on https://jsonplaceholder.typicode.com/comments endpoint as store them in state

export const getComments = createAsyncThunk(
    'posts/getComments',
    async (thunkAPI) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments').then(
      (data) => data.json()
    )
    console.log('comments', res)
    return res
  })

const initialState = {
    comments:[],
    isLoading: false,
    status: "",
    message: "",
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: {
        [getComments.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.comments = payload
        },
        [getComments.pending]: (state) => {
            state.isFetching = true;
        },
        [getComments.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        }
    }
});

const { reducer, actions } = commentsSlice;
export const commentsSelector = state => state.comments

export default reducer;
