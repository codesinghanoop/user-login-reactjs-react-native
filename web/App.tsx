import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../src/store/index';
import WebRoutes from './routes';
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WebRoutes />
    </PersistGate>
  </Provider>
);

export default App;
