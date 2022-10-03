import { InjectedConnector } from '@web3-react/injected-connector';
import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import type { Networkish } from '@ethersproject/networks'
import type { BaseProvider, Web3Provider } from '@ethersproject/providers'
import { createWeb3ReactStoreAndActions } from '@web3-react/store'
import type { Actions, Connector, Web3ReactState, Web3ReactStore } from '@web3-react/types'
import { useEffect, useMemo, useState } from 'react'
import type { EqualityChecker, UseBoundStore } from 'zustand'
import create from 'zustand'

function initializeConnector<T extends Connector>(
  f: (actions: Actions) => T
): [T, Web3ReactHooks, Web3ReactStore] {
  const [store, actions] = createWeb3ReactStoreAndActions()

  const connector = f(actions)
  const useConnector = create(store)

  const stateHooks = getStateHooks(useConnector)
  const derivedHooks = getDerivedHooks(stateHooks)
  const augmentedHooks = getAugmentedHooks<T>(connector, stateHooks, derivedHooks)

  return [connector, { ...stateHooks, ...derivedHooks, ...augmentedHooks }, store]
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 42161],
});


export const [network, hooks] = initializeConnector<Network>((actions) => new Network({ actions, urls: [
      process.env.infuraKey ? `https://arbitrum-mainnet.infura.io/v3/${process.env.infuraKey}` : '',
      'https://arb1.arbitrum.io/rpc',
    ].filter((url) => url !== '') }))
