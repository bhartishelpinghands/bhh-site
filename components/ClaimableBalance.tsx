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
      {`Earned ETH Amount for Compound Period`}: {parseBalance(data ?? 0)}
    </p>
  );
};

export default ClaimableBalance;
