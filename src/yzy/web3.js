import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import Web3 from 'web3';
import config from '../config';

// const providerUrl = config.web3Provider;
const providerUrl = new Web3.providers.HttpProvider(config.web3Provider, { timeout: 10000 })
const web3 = new Web3(window.ethereum || providerUrl);

const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org', // Required
  qrcodeModal: QRCodeModal,
});

export { Web3, providerUrl, web3, connector };
