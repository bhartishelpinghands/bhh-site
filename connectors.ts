import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector'


const RPC_URLS: { [chainId: number]: string } = {
  42161: process.env.RPC_URL_1 as string
}

export const injected = new InjectedConnector({
  supportedChainIds: [42161],
});

export const network = new NetworkConnector({
  urls: { 42161: RPC_URLS[42161]},
  defaultChainId: 42161
})

