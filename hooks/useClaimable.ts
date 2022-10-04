import useSWR from "swr";
import type { RewardTracker } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useRewardTracker from "./useRewardTracker";

function getClaimable(contract: RewardTracker, vaultaddress) {
  return async (_: string) => {
    const balance = await contract.claimable(vaultaddress);

    return balance;
  };
}

export default function useClaimable(
  trackerAddress: string,
  vaultaddress: string,
  suspense = false
) {
  const contract = useRewardTracker(trackerAddress);

  const result = getClaimable(contract, vaultaddress);

  return result;
}
