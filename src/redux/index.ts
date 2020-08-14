import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { useDispatch } from 'react-redux';

import appReducer from './app/slice';
import groupsReducer from './groups/slice';
import placesReducer from './places/slice';
import charactersReducer from './characters/slice';
import itemsReducer from './characters/slice';
import worldsReducer from './worlds/slice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  app: appReducer,
  places: placesReducer,
  groups: groupsReducer,
  characters: charactersReducer,
  items: itemsReducer,
  worlds: worldsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  enhancers: [],
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be resused to resolve types

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
