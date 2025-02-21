import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./Auth/authSlice";
import medSliceReducer from "./medSlice";
import { authApi } from "../service/authService";
import { prescriptionApi } from "../service/prescriptionService";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [prescriptionApi.reducerPath]: prescriptionApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    medications: medSliceReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(prescriptionApi.middleware)
      .concat(authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
