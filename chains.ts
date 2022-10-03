

interface BasicChainInformation {
  urls: string[]
  name: string
}



export const CHAINS: { [chainId: number]: BasicChainInformation } = {
  1: {
    urls: [
      process.env.infuraKey ? `https://mainnet.infura.io/v3/${process.env.infuraKey}` : undefined,
      process.env.alchemyKey ? `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemyKey}` : undefined,
      'https://cloudflare-eth.com',
    ].filter((url) => url !== undefined),
    name: 'Mainnet',
  },
  3: {
    urls: [process.env.infuraKey ? `https://ropsten.infura.io/v3/${process.env.infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Ropsten',
  },
  4: {
    urls: [process.env.infuraKey ? `https://rinkeby.infura.io/v3/${process.env.infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Rinkeby',
  },
  5: {
    urls: [process.env.infuraKey ? `https://goerli.infura.io/v3/${process.env.infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Görli',
  },
  42: {
    urls: [process.env.infuraKey ? `https://kovan.infura.io/v3/${process.env.infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Kovan',
  },
  // Optimism
  10: {
    urls: [
      process.env.infuraKey ? `https://optimism-mainnet.infura.io/v3/${process.env.infuraKey}` : undefined,
      'https://mainnet.optimism.io',
    ].filter((url) => url !== undefined),
    name: 'Optimism',
  },
  69: {
    urls: [
      process.env.infuraKey ? `https://optimism-kovan.infura.io/v3/${process.env.infuraKey}` : undefined,
      'https://kovan.optimism.io',
    ].filter((url) => url !== undefined),
    name: 'Optimism Kovan',
  },
  // Arbitrum
  42161: {
    urls: [
      process.env.infuraKey ? `https://arbitrum-mainnet.infura.io/v3/${process.env.infuraKey}` : undefined,
      'https://arb1.arbitrum.io/rpc',
    ].filter((url) => url !== undefined),
    name: 'Arbitrum One',
  },
  421611: {
    urls: [
      process.env.infuraKey ? `https://arbitrum-rinkeby.infura.io/v3/${process.env.infuraKey}` : undefined,
      'https://rinkeby.arbitrum.io/rpc',
    ].filter((url) => url !== undefined),
    name: 'Arbitrum Testnet',
  },
  // Polygon
  137: {
    urls: [
      process.env.infuraKey ? `https://polygon-mainnet.infura.io/v3/${process.env.infuraKey}` : undefined,
      'https://polygon-rpc.com',
    ].filter((url) => url !== undefined),
    name: 'Polygon Mainnet',
  },
  80001: {
    urls: [process.env.infuraKey ? `https://polygon-mumbai.infura.io/v3/${process.env.infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Polygon Mumbai',
  },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)
