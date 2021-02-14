import React from 'react';
import './footer.css';

function Footer() {

    return (
        <div className='footer'>
            <ul>
                <li><a href='https://t.me/yzyDAO' target='_blank' rel="noreferrer">Telegram</a></li>
                <li><a href='https://twitter.com/yzyDAO' target='_blank' rel="noreferrer">Twitter</a></li>
                <li><a href='https://discord.gg/BkwW8B3' target='_blank' rel="noreferrer">Discord</a></li>
                <li><a href='https://github.com/yzyDAO/contracts' target='_blank' rel="noreferrer">Github</a></li>
                <li><a href='https://app.uniswap.org/#/swap?outputCurrency=0x6ca2cc52bb2cb67dd952e73b8786eb3a368b484c' target='_blank' rel="noreferrer">Trade</a></li>
                <li><a href='https://www.dextools.io/app/uniswap/pair-explorer/0x2cda371f367208c15390727839172941f48f532d' target='_blank' rel="noreferrer">Dextools</a></li>
                <li><a href='https://info.uniswap.org/token/0x6ca2cc52bb2cb67dd952e73b8786eb3a368b484c' target='_blank' rel="noreferrer">Uniswap</a></li>
            </ul>
        </div>
    );

}

export default Footer;