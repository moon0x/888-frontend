import BigNumber from 'bignumber.js';
// import { gql } from '@apollo/client';
// import client from './apollo';
import { $888BNBPairContract, busdBNBPairContract } from '../$888/contracts';
import { getCirculatingSupply } from '../$888/token';
import { bnToDec, callMethod } from '../$888/utils';

// const GET_PAIR_PRICE = gql`
//   query GetExchangeRates {
//     pair(id: "${$888BNBPairContract.address}"){
//         token0Price
//         token1Price
//     }
//    }
// `;

const get$888Price = async () => {
    // token0 -> wbnb & token1 -> busd
    const result1 = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
    // token0 -> 888 & token1 -> wbnb
    const result2 = await callMethod($888BNBPairContract.contract.methods['getReserves'], []);

    const wbnbBalanceForBusd = bnToDec(new BigNumber(result1._reserve0));
    const busdBalance = bnToDec(new BigNumber(result1._reserve1));
    const $888Balance = bnToDec(new BigNumber(result2._reserve0));
    const wbnbBalanceFor$888 = bnToDec(new BigNumber(result2._reserve1));
    const price = busdBalance / wbnbBalanceForBusd * wbnbBalanceFor$888 / $888Balance;
    return price;
};

const getBNBPrice = async () => {
    // token0 -> wbnb & token1 -> busd
    const result1 = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
    const wbnbBalance = bnToDec(new BigNumber(result1._reserve0));
    const busdBalance = bnToDec(new BigNumber(result1._reserve1));
    const price = busdBalance / wbnbBalance;
    return price;
};

const getMarketcap = async () => {
    const $888Price = await get$888Price();
    const curculatingSupply = bnToDec(await getCirculatingSupply());
    return ($888Price * curculatingSupply);
};

export {
    get$888Price,
    getBNBPrice,
    getMarketcap
}