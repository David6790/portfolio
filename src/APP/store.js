import { configureStore } from "@reduxjs/toolkit";

import projectSlice from "../features/themes/projectSlice";
import api from "../API/api";

const store = configureStore({
  reducer: {
    projects: projectSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
