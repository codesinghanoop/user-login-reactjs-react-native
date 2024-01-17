import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../src/store/index';
import WebRoutes from './routes';
import ThemeContent from '../src/theme/theme';
import ErrorBoundaryWeb from '../app/Component/ErrorBoundryWeb';
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundaryWeb>
        <ThemeContent>
          <WebRoutes />
        </ThemeContent>
      </ErrorBoundaryWeb>
    </PersistGate>
  </Provider>
);

export default App;
