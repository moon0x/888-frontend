import BigNumber from 'bignumber.js';
// import { gql } from '@apollo/client';
// import client from './apollo';
import { yzyETHPairContract, usdcETHPairContract } from '../yzy/contracts';
import { getCirculatingSupply } from '../yzy/token';
import { bnToDec, callMethod } from '../yzy/utils';

// const GET_PAIR_PRICE = gql`
//   query GetExchangeRates {
//     pair(id: "${yzyETHPairContract.address}"){
//         token0Price
//         token1Price
//     }
//    }
// `;

const getYZYPrice = async () => {
    const result1 = await callMethod(usdcETHPairContract.contract.methods['getReserves'], []);
    const result2 = await callMethod(yzyETHPairContract.contract.methods['getReserves'], []);
    const yzyBalance = bnToDec(new BigNumber(result2._reserve0));
    const ethBalanceForYzy = bnToDec(new BigNumber(result2._reserve1));
    const usdcBalance = bnToDec(new BigNumber(result1._reserve0), 6);
    const ethBalanceForUsdc = bnToDec(new BigNumber(result1._reserve1));

    const price = usdcBalance / ethBalanceForUsdc * ethBalanceForYzy / yzyBalance;
    return price;
};

const getETHPrice = async () => {
    const result1 = await callMethod(usdcETHPairContract.contract.methods['getReserves'], []);
    const usdcBalance = bnToDec(new BigNumber(result1._reserve0), 6);
    const ethBalance = bnToDec(new BigNumber(result1._reserve1));
    const price = usdcBalance / ethBalance;

    return price;
};

const getMarketcap = async () => {
    const yzyPrice = await getYZYPrice();
    const curculatingSupply = bnToDec(await getCirculatingSupply());
    return (yzyPrice * curculatingSupply);
};

export {
    getYZYPrice,
    getETHPrice,
    getMarketcap
}