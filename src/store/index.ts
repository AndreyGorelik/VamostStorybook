import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

import authSlice from './slices/auth.slice';
import postSlice from './slices/post.slice';
import cancelledPostsSlice from './slices/posts/cancelledPosts.slice';
import pastPostsSlice from './slices/posts/pastPosts.slice';
import postsSlice from './slices/posts/posts.slice';
import upcomingPostsSlice from './slices/posts/upcomingPosts.slice';
import userSlice from './slices/user.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'errorsSlice',
    'authSlice',
    'postsSlice.error',
    'upcomingPostsSlice.error',
    'pastPostsSlice.error',
    'cancelledPostsSlice.error',
    'userSlice',
  ],
};

const rootReducer = combineReducers({
  authSlice,
  userSlice,
  postSlice,
  postsSlice,
  upcomingPostsSlice,
  cancelledPostsSlice,
  pastPostsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store: ToolkitStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
