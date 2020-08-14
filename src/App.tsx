import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/styles';

import store, { persistor } from './redux';
import bootstrap from './redux/bootstrap';
import { GlobalStyle } from './styles/GlobalStyle';
import Layout from './components/Layout';
import { theme } from './styles/mui-theme';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);
bootstrap(store);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Layout />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

render(<App />, mainElement);
