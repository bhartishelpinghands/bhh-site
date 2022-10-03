import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const BHHGLP_TOKEN_ADDRESS = "0x0da9d783ce7D5c562c03d07f55AE50e5Bc072895";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Bharti's Helping Hands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Bharti's Helping Hands</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>
         Bharti's Helping Hands
        </h1>
        <h3>A pgilanthropic project in honorable memory of Bharti Patil</h3>

        {isConnected && (
          <section>
            <ETHBalance />

            <TokenBalance tokenAddress={BHHGLP_TOKEN_ADDRESS} symbol="bhhGLP" />
          </section>
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
