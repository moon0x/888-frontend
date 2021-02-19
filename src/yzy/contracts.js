/* eslint-disable quote-props */
/* eslint-disable max-len */
import { web3 } from './web3';
import config from '../config';

import yzyContractAbi from './abis/yzyContract.json';
import vaultContractAbi from './abis/vaultContract.json';
import uniV2PairContractAbi from './abis/yzyETHPairContract.json';
import wethContractAbi from './abis/wethContract.json';
import wbtcContractAbi from './abis/wbtcContract.json';
import yfiContractAbi from './abis/yfiContract.json';

const networkId = config.networkId;
console.log(networkId);
const yzyContractAddress = config.contractAddress.yzy[networkId];
const IyzyContract = new web3.eth.Contract(yzyContractAbi, yzyContractAddress);
console.log('yzyContractAddress >>>', yzyContractAddress);
console.log('IyzyContract >>> ', IyzyContract);

const vaultContractAddress = config.contractAddress.vault[networkId];
const IVaultContract = new web3.eth.Contract(
  vaultContractAbi,
  vaultContractAddress
);
console.log('vaultContractAddress >>>', vaultContractAddress);
console.log('IVaultContract >>>', IVaultContract);

const yzyETHPairContractAddress = config.contractAddress.yzyETHPair[networkId];
const IyzyETHPairContract = new web3.eth.Contract(
  uniV2PairContractAbi,
  yzyETHPairContractAddress
);

const yfiETHPairContractAddress = config.contractAddress.yfiETHPair[networkId];
const IyfiETHPairContract = new web3.eth.Contract(
  uniV2PairContractAbi,
  yfiETHPairContractAddress
);

const wbtcETHPairContractAddress =
  config.contractAddress.wbtcETHPair[networkId];
const IwbtcETHPairContract = new web3.eth.Contract(
  uniV2PairContractAbi,
  wbtcETHPairContractAddress
);

const wethContractAddress = config.contractAddress.weth[networkId];
const IWethContract = new web3.eth.Contract(
  wethContractAbi,
  wethContractAddress
);

const wbtcContractAddress = config.contractAddress.wbtc[networkId];
const IwbtcContract = new web3.eth.Contract(
  wbtcContractAbi,
  wbtcContractAddress
);

const yfiContractAddress = config.contractAddress.yfi[networkId];
const IyfiContract = new web3.eth.Contract(yfiContractAbi, yfiContractAddress);

const usdcETHPairContractAddress =
  config.contractAddress.usdcETHPair[networkId];
const IusdcETHPairContract = new web3.eth.Contract(
  uniV2PairContractAbi,
  usdcETHPairContractAddress
);

const yzyContract = {
  address: yzyContractAddress,
  abi: yzyContractAbi,
  contract: IyzyContract,
  decimals: 18,
};

const vaultContract = {
  address: vaultContractAddress,
  abi: vaultContractAbi,
  contract: IVaultContract,
};

const yzyETHPairContract = {
  address: yzyETHPairContractAddress,
  abi: uniV2PairContractAbi,
  contract: IyzyETHPairContract,
  decimals: 18,
};

const yfiETHPairContract = {
  address: yfiETHPairContractAddress,
  abi: uniV2PairContractAbi,
  contract: IyfiETHPairContract,
  decimals: 18,
};

const wbtcETHPairContract = {
  address: wbtcETHPairContractAddress,
  abi: uniV2PairContractAbi,
  contract: IwbtcETHPairContract,
  decimals: 18,
};

const wethContract = {
  address: wethContractAddress,
  abi: wethContractAbi,
  contract: IWethContract,
  decimals: 18,
};

const wbtcContract = {
  address: wbtcContractAddress,
  abi: yfiContractAbi,
  contract: IwbtcContract,
  decimals: 8,
};

const yfiContract = {
  address: yfiContractAddress,
  abi: wbtcContractAbi,
  contract: IyfiContract,
  decimals: 18,
};

const usdcETHPairContract = {
  address: usdcETHPairContractAddress,
  abi: uniV2PairContractAbi,
  contract: IusdcETHPairContract,
  decimals: 18,
};

export {
  networkId,
  yzyContract,
  vaultContract,
  yzyETHPairContract,
  yfiETHPairContract,
  wbtcETHPairContract,
  wethContract,
  wbtcContract,
  yfiContract,
  usdcETHPairContract,
};
