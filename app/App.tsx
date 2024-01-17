import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../src/store/index';
import AppRouter from './Router';
import ThemeContent from '../src/theme/theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContent>
          <AppRouter />
        </ThemeContent>
      </PersistGate>
    </Provider>
  );
};

export default App;
