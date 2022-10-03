import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from '@web3-react/network-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 42161],
});

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 42161
})
