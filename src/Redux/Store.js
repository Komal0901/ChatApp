import {configureStore} from '@reduxjs/toolkit';
import Slice from './Slice';
const store = configureStore({
  reducer: {
    message: Slice,
  },
});
export default store;
