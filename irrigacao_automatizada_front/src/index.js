import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/app';
import store from './Config/store/index';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);