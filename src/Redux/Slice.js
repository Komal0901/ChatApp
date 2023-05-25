import {createSlice} from '@reduxjs/toolkit';
const Slice = createSlice({
  name: 'message',
  initialState: {
    messages: [],

    data: [
      {label: 'Anand', value: '1'},
      {label: 'Chitranshi', value: '2'},
      {label: 'Vijay', value: '3'},
      {label: 'Sapna', value: '4'},
      {label: 'Aksh', value: '5'},
      {label: 'Dhawani', value: '6'},
    ],
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages = action.payload;

      console.log('redux', state.messages);
    },
  },
});
export default Slice.reducer;
export const {sendMessage} = Slice.actions;
