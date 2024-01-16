import {persistedRootReducer} from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// Setup Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Create Store
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Setup Store persistence
const persistor = persistStore(store, null);

// Start rootSaga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
