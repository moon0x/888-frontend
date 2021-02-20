const { default: getRpcUrl } = require('./getRpcUrl');
require('dotenv').config();

// const web3Provider =
//   process.env.REACT_APP_NETWORK_ID === '56'
//     ? process.env.REACT_APP_MAIN_WEB3_PROVIDER
//     : process.env.REACT_APP_TEST_WEB3_PROVIDER;

const web3Provider = getRpcUrl('97');
const config = {
  web3Provider: web3Provider,
  networkId: '97', //   process.env.REACT_APP_NETWORK_ID
  contractAddress: {
    yzy: {
      56: '0x1829CbA3DbE1468c1b37459a0EF3aF3218798f65',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    vault: {
      56: '0x348af00C5eC4594200dAeF5BDAB7B115Aae69063',
      97: '0x6bC9271B45926317B4c07D0fFE1631dd811C16f3',
    },
    weth: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    wbtc: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yfi: {
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    usdc: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yzyETHPair: {
      56: '0x42366997757fa22f70d3526d91b44a3a1efb0846',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    wbtcETHPair: {
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yfiETHPair: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    usdcETHPair: {
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    univ2router: {
      56: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
  },
};

module.exports = config;
