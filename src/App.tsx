import React, { memo } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider, theme } from './styles/theme';
import GlobalStyle, { Content } from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Content>
          <Sidebar />
          <List />
        </Content>
      </>
    </ThemeProvider>
  </Provider>
);

export default memo(App);
