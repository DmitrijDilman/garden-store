import { configureStore, cooonfigureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    cart: () => {},
    auth: () => {},
    theme: () => {}
  }
});
