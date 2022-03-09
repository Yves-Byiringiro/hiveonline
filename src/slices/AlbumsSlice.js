import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// I used slice as on of the methods of reduxjs toolkit library (new library for managing state)

// fetching albums data on https://jsonplaceholder.typicode.com/albums endpoint as store them in state
export const getAlbums = createAsyncThunk(
    'posts/getAlbums',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums').then(
            (data) => data.json()
        )
        console.log('albums', res)
        return res
    })

const initialState = {
    albums:[],
    isLoading: false,
    status: "",
    message: "",
};

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: {
        [getAlbums.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.albums = payload
        },
        [getAlbums.pending]: (state) => {
            state.isFetching = true;
        },
        [getAlbums.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        }
    }
});

const { reducer, actions } = albumsSlice;
export const albumsSelector = state => state.albums

export default reducer;
