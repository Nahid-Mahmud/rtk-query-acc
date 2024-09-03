import { configureStore } from "@reduxjs/toolkit";
import { baseUrl } from "./service/api/baseUrl";

//  create a store for redux
const store = configureStore({
  reducer: {
    [baseUrl.reducerPath]: baseUrl.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseUrl.middleware),
});

export default store;
