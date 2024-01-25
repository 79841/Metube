import { useQuery } from "@tanstack/react-query";
import { youtubeService } from "../services/youtube";
import { useGoogleAccessTokenStore } from "../lib/zustand";
import { subscriptionList } from "../data/youtube/subscriptionList";

export const useSubscribeList = () => {
  // const { accessToken } = useGoogleAccessTokenStore();
  // const { data, isLoading } = useQuery({
  //   queryKey: ["subscribe_list"],
  //   queryFn: () => youtubeService.getMySubscribeList(accessToken as string),
  // });

  const data = subscriptionList.items;
  const isLoading = false;

  return { data, isLoading };
};
