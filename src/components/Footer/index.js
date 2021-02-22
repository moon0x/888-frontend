import React from 'react'
import './footer.css'

import twitter from '../../icons/twitter.svg'
import discord from '../../icons/discord.svg'
import telegram from '../../icons/telegram.svg'
import github from '../../icons/github.svg'
import bunny from '../../icons/bunny.svg'
import dextools from '../../icons/icon.svg'

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>
          <a href="https://twitter.com/888daofinance" rel="noreferrer" target="_blank" >
            <img src={twitter} alt='Twitter' />
          </a>
        </li>
        <li>
          <a href="https://t.me/dao888finance" rel="noreferrer" target="_blank" >
            <img src={telegram} alt='Telegram' />
          </a>
        </li>
        <li>
          <a href="https://github.com/888daofinance" rel="noreferrer" target="_blank" >
            <img src={github} alt='Github' />
          </a>
        </li>
        <li>
          <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xBFb2857474A48b345dD1c2F67ba57C28caa630fA" rel="noreferrer" target="_blank" >
            <img src={bunny} alt='pancakeswap' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
