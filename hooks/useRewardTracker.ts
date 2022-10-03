import RewardTracker_ABI from "../contracts/RewardTracker.json";
import type { RewardTracker } from "../contracts/types";
import useContract from "./useContract";

export default function useRewardTracker(contractAddress?: string) {
  return useContract<RewardTracker>(contractAddress, RewardTracker_ABI);
}
