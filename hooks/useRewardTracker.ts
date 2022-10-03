import RewardTracker_ABI from "../contracts/RewardTracker.json";
import type { RewardTracker } from "../contracts/types";
import useContractProvider from "./useContractProvider";

export default function useRewardTracker(contractAddress?: string) {
  return useContractProvider<RewardTracker>(contractAddress, RewardTracker_ABI);
}
