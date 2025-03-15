import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import rootReducer from './reducers/index';

const store = configureStore({
  reducer: {
    rootReducer: productSlice,
  },
});

export default store;
