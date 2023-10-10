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
import postSlice from './slices/post/post.slice';
import approveRequestsSlice from './slices/post/requests/approveRequests.slice';
import deletedRequestsSlice from './slices/post/requests/deletedRequests.slice';
import pendingRequestsSlice from './slices/post/requests/pendingRequests.slice';
import postCreateSlice from './slices/postCreateSlice';
import cancelledPostsSlice from './slices/posts/cancelledPosts.slice';
import pastPostsSlice from './slices/posts/pastPosts.slice';
import postsSlice from './slices/posts/posts.slice';
import upcomingPostsSlice from './slices/posts/upcomingPosts.slice';
import profileSlice from './slices/profileSlice';
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
    'postSlice',
    'approveRequestsSlice',
    'deletedRequestsSlice',
    'pendingRequestsSlice',
    'profileSlice',
    'postCreateSlice',
  ],
};

const rootReducer = combineReducers({
  authSlice,
  userSlice,
  postSlice,
  postsSlice,
  postCreateSlice,
  profileSlice,
  upcomingPostsSlice,
  cancelledPostsSlice,
  pastPostsSlice,
  approveRequestsSlice,
  deletedRequestsSlice,
  pendingRequestsSlice,
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
