import { configureStore } from "@reduxjs/toolkit";
import photoReducer from './photo/photoSlice.js'

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('photos', JSON.stringify(getState()));
      return result;
    };
  };
  
  const reHydrateStore = () => {
    if (localStorage.getItem('photos') !== null) {
      return JSON.parse(localStorage.getItem('photos')); // re-hydrate the store
    }
  };
  

export const store = configureStore({
    reducer:{
        photos:photoReducer
    },
     preloadedState: reHydrateStore(),
     middleware: getDefaultMiddleware =>
     getDefaultMiddleware().concat(localStorageMiddleware),
})