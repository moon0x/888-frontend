import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setAddress, setNetworkId, setError } from './redux/actions';
import Layout from './layout';
import Vault from './views/vault';
import Lottery from './views/lottery';
import { providerUrl, Web3, connector } from './yzy/web3';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    if (isMobile) {
      if (connector.connected) {
        this.props.setAddressRequest(connector._accounts[0]);
        this.props.setNetworkIdRequest(connector._chainId.toString(10));
      }
    } else {
      window.web3 = null;
      // modern broswers
      if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.net.getId((err, netId) => {
          this.handleNetworkChanged(`${netId}`);
          window.ethereum.on('accountsChanged', (accounts) =>
            this.handleAddressChanged(accounts)
          );
          window.ethereum.on('chainChanged', (netId) =>
            this.handleNetworkChanged(netId)
          );
          this.props.setAddressRequest(window.ethereum.selectedAddress);
        });
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.web3 = null;
      }
    }
  }

  handleAddressChanged = (accounts) => {
    if (typeof window.ethereum !== 'undefined') {
      this.props.setAddressRequest(window.ethereum.selectedAddress);
    }
  };

  handleNetworkChanged = (networkId) => {
    this.props.setNetworkIdRequest(networkId);
    switch (networkId) {
      case '56':
        if (providerUrl === 'https://bsc-dataseed1.defibit.io/') {
          this.props.setErrorRequest(false);
        } else {
          this.props.setErrorRequest(true);
        }
        break;
        case '97':
        if (providerUrl === 'https://data-seed-prebsc-2-s1.binance.org:8545/') {
          this.props.setErrorRequest(false)
        } else {
          this.props.setErrorRequest(true)
        }
        break;
      default:
        this.props.setErrorRequest(true);
    }
  };

  render() {
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);
