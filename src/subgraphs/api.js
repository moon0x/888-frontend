import BigNumber from 'bignumber.js';
// import { gql } from '@apollo/client';
// import client from './apollo';
import { $888BNBPairContract, busdBNBPairContract, wbnbContract } from '../$888/contracts';
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
    let busdReserve = 0;
    let bnbReserve1 = 0;
    let dao888Reserve = 0;
    let bnbReserve2 = 0;
    let token0;

    token0 = await callMethod(busdBNBPairContract.contract.methods['token0'], []);
    if(token0 === wbnbContract.address) {
        let result = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
        bnbReserve1 = bnToDec(new BigNumber(result._reserve0));
        busdReserve = bnToDec(new BigNumber(result._reserve1));
    } else {
        let result = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
        busdReserve = bnToDec(new BigNumber(result._reserve0));
        bnbReserve1 = bnToDec(new BigNumber(result._reserve1));
    }

    token0 = await callMethod($888BNBPairContract.contract.methods['token0'], []);
    if(token0 === wbnbContract.address) {
        let result = await callMethod($888BNBPairContract.contract.methods['getReserves'], []);
        bnbReserve2 = bnToDec(new BigNumber(result._reserve0));
        dao888Reserve = bnToDec(new BigNumber(result._reserve1));
    } else {
        let result = await callMethod($888BNBPairContract.contract.methods['getReserves'], []);
        dao888Reserve = bnToDec(new BigNumber(result._reserve0));
        bnbReserve2 = bnToDec(new BigNumber(result._reserve1));
    }

    if(bnbReserve1 <= 0 || dao888Reserve <= 0) return;

    const price = busdReserve / bnbReserve1 * bnbReserve2 / dao888Reserve;
    return price;
};

const getBNBPrice = async () => {
    let busdReserve = 0;
    let bnbReserve1 = 0;
    let token0;

    token0 = await callMethod(busdBNBPairContract.contract.methods['token0'], []);
    if(token0 === wbnbContract.address) {
        let result = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
        bnbReserve1 = bnToDec(new BigNumber(result._reserve0));
        busdReserve = bnToDec(new BigNumber(result._reserve1));
    } else {
        let result = await callMethod(busdBNBPairContract.contract.methods['getReserves'], []);
        busdReserve = bnToDec(new BigNumber(result._reserve0));
        bnbReserve1 = bnToDec(new BigNumber(result._reserve1));
    }

    if(bnbReserve1 <= 0 || busdReserve <= 0) return;

    const price = busdReserve / bnbReserve1;
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