import { useWeb3React } from "@web3-react/core";
import type { Web3Provider } from "@ethersproject/providers";
import Head from "next/head";
import Link from "next/link";
import ClaimableBalance from "../components/ClaimableBalance";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";


const BHHGLP_TOKEN_ADDRESS = "0x0da9d783ce7D5c562c03d07f55AE50e5Bc072895";
const TRACKER_ADDRESS = "0x4e971a87900b931fF39d1Aad67697F49835400b6";
const GLP_MGR_ADDRESS = "0x321F653eED006AD1C29D174e17d96351BDe22649";
const GLP_ADDRESS = "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
      <div>
      <Head>
        <title>Bharti&apos;s Helping Hands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <nav>
          <p>
          <Link href="/">
            <a>Home</a>
          </Link>
          </p>
          <p>
          <Link href="/vault">
            <a>Vault</a>
          </Link>
          </p>
          <p>
           <Account triedToEagerConnect={triedToEagerConnect} />
          </p>
        </nav>
      </header>

      <main>
        <h1>
         Bharti&apos;s Helping Hands
        </h1>
        <h3>A philanthropic project in honorable memory of Bharti Patil</h3>

        {isConnected && (
          <section>
            <ETHBalance />

            <TokenBalance tokenAddress={BHHGLP_TOKEN_ADDRESS} symbol="bhhGLP" />
          </section>
        )}
        <section>
          <ClaimableBalance vaultaddress={BHHGLP_TOKEN_ADDRESS} trackerAddress={TRACKER_ADDRESS} />
        </section>   
      </main>

      <style jsx>{`       
        nav {
          display: flex;
          justify-content: space-evenly;
          color: #41d0d5;
          font-family: sans-serif;
        }    
        
       h1 {
          color: #41d0d5;
          }

       main {
          text-align: center;
          font-family: sans-serif;
          padding: 20px;
          margin: 20px;
        }
      `}</style>
   </div>
  );
}

export default Home;
