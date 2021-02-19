import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './fonts/VT323-Regular.ttf'
import bsc, { UseWalletProvider } from 'use-wallet';

ReactDOM.render(
  <Provider store={configureStore()}>
    <UseWalletProvider
      chainId={97}
      connectors={{
        // walletconnect: { rpcUrl: 'https://data-seed-prebsc-2-s1.binance.org:8545/' },
        bsc,
      }}
    >
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </UseWalletProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
