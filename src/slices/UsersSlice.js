import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// I used slice as on of the methods of reduxjs toolkit library (new library for managing state)

// fetching users data on https://jsonplaceholder.typicode.com/users endpoint as store them in state

export const getUSers = createAsyncThunk(
    'posts/getUsers',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users').then(
            (data) => data.json()
        )
        return res
    })

const initialState = {
    users:[],
    isLoading: false,
    status: "",
    message: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: {
        [getUSers.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.users = payload
        },
        [getUSers.pending]: (state) => {
            state.isFetching = true;
        },
        [getUSers.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        }
    },
});

const { reducer } = usersSlice;
export const usersSelector = state => state.users
export default reducer;
