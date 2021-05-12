import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getLocation = createAsyncThunk('user/location', async () => {
  return axios({
    method: 'POST',
    url: 'https://aws.random.cat/meow',
  })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => error.message);
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    catData: null,
    message: '',
  },
  reducers: {},
  extraReducers: {
    [getLocation.pending]: (state, action) => {
      console.log('pending');
      state.message = 'pending';
      console.log(action);
    },
    [getLocation.rejected]: (state, action) => {
      console.log('rejected');
      state.message = 'reject';
      console.log(action);
    },
    [getLocation.fulfilled]: (state, {payload}) => {
      console.log('success');
      state.message = 'success';
      state.catData = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
