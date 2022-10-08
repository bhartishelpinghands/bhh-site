import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';


const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://arb-mainnet.g.alchemy.com/v2/hHPHTyMy1PVms2P8tUgkOE1OISeFxVSZ'
}

export const injected = new InjectedConnector({
  supportedChainIds: [42161],
});

export const network = new NetworkConnector({
  urls: { 42161: 'https://arb-mainnet.g.alchemy.com/v2/hHPHTyMy1PVms2P8tUgkOE1OISeFxVSZ'},
  defaultChainId: 42161
})

