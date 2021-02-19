const { default: getRpcUrl } = require('./getRpcUrl');
require('dotenv').config();

// const web3Provider =
//   process.env.REACT_APP_NETWORK_ID === '56'
//     ? process.env.REACT_APP_MAIN_WEB3_PROVIDER
//     : process.env.REACT_APP_TEST_WEB3_PROVIDER;

const web3Provider = getRpcUrl();
const config = {
  web3Provider: web3Provider,
  networkId: '97', //   process.env.REACT_APP_NETWORK_ID
  contractAddress: {
    yzy: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    vault: {
      56: '',
      97: '0x6bC9271B45926317B4c07D0fFE1631dd811C16f3',
    },
    weth: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    wbtc: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yfi: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    usdc: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yzyETHPair: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    wbtcETHPair: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    yfiETHPair: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    usdcETHPair: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
    univ2router: {
      56: '',
      97: '0xB5526B53050282474B3dEB5Aca92519bB7A60A33',
    },
  },
};

module.exports = config;
