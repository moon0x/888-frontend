import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setAddress, setNetworkId, setError } from './redux/actions';
import Layout from './layout';
import Vault from './views/vault';
import Lottery from './views/lottery';
import { providerUrl, Web3 } from './yzy/web3';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useWallet } from 'use-wallet';
import bsc from '@binance-chain/bsc-use-wallet'


function App({ setAddressRequest, setNetworkIdRequest, setErrorRequest }) {

  const wallet = useWallet();

  console.log('App: wallet >>> ', wallet);
  console.log('App: bsc >>> ', bsc);

  if (isMobile) {
    if (wallet.status === 'connected') {
      setAddressRequest(wallet.account);
      setNetworkIdRequest(wallet.chainId.toString(10));
    }
  } else {
    window.web3 = null;
    // modern browsers
    if (typeof wallet.ethereum !== 'undefined') {
      window.web3 = new Web3(wallet.ethereum);
      
      console.log('window.ethereum >>>', window.ethereum);
      console.log('wallet.ethereum >>>', wallet.ethereum);
      console.log('window.web3', window.web3);

      window.web3.eth.net.getId((err, netId) => {
        handleNetworkChanged(`${netId}`);
        wallet.ethereum.on('accountsChanged', (accounts) =>
          handleAddressChanged(accounts)
        );
        wallet.ethereum.on('chainChanged', (netId) =>
          handleNetworkChanged(netId)
        );
        setAddressRequest(wallet.ethereum.selectedAddress);
      });
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.web3 = null;
    }
  }

  const handleAddressChanged = (accounts) => {
    if (typeof wallet.ethereum !== 'undefined') {
      setAddressRequest(wallet.ethereum.selectedAddress);
    }
  };

  const handleNetworkChanged = (networkId) => {
    setNetworkIdRequest(networkId);
    switch (networkId) {
      case '56':
        if (providerUrl === 'https://bsc-dataseed1.defibit.io/') {
          setErrorRequest(false);
        } else {
          setErrorRequest(true);
        }
        break;
      case '97':
      if (providerUrl === 'https://data-seed-prebsc-2-s1.binance.org:8545/') {
        setErrorRequest(false)
      } else {
        setErrorRequest(true)
      }
      break;
      default:
        setErrorRequest(true);
    }
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Vault />
          </Route>
          <Route path="/vault" exact>
            <Vault />
          </Route>
          <Route path="/lottery" exact>
            <Lottery />
          </Route>
        </Switch>
        <NotificationContainer />
      </Layout>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);
