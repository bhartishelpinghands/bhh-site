import { InjectedConnector } from '@web3-react/injected-connector';
import { Network } from '@web3-react/network';
import { initializeConnector } from '@web3-react/core';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 42161],
});


export const [network, hooks] = initializeConnector<Network>((actions) => new Network({ actions, urls: [
      process.env.infuraKey ? `https://arbitrum-mainnet.infura.io/v3/${process.env.infuraKey}` : '',
      'https://arb1.arbitrum.io/rpc',
    ].filter((url) => url !== '') }))
