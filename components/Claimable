import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useClaimable from "../hooks/useClaimable";
import { parseBalance } from "../util";

type ClaimableProps = {
  trackerAddress: string;
  vaultaddress: string;
};

const ClaimableBalance = ({ trackerAddress, vaultaddress }: ClaimableProps) => {
  const { data } = useClaimable(trackerAddress, vaultaddress);

  return (
    <p>
      {`Claimable ETH Balance`}: {parseBalance(data ?? 0)}
    </p>
  );
};

export default ClaimableBalance;
