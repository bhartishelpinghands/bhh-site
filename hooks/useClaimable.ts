import useSWR from "swr";
import type { RewardTracker } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useRewardTracker from "./useRewardTracker";

function getClaimable(contract: RewardTracker, vaultaddress) {
    const balance = await contract.claimable(vaultaddress);

    return balance;
  };


export default function useClaimable(
  trackerAddress: string,
  vaultaddress: string,
) {
  const contract = useRewardTracker(trackerAddress);

  const shouldFetch =
    typeof vaultaddress === "string" &&
    typeof trackerAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["ClaimableBalance", trackerAddress, vaultaddress] : null,
    getClaimable(contract, vaultaddress),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
