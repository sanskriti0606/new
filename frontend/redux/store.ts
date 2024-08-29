import { configureStore } from '@reduxjs/toolkit';
import { rapidapiApi } from './services/rapidapiCore';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [rapidapiApi.reducerPath]: rapidapiApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidapiApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
