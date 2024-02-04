import { useSuspenseQuery } from "@tanstack/react-query";
import { videosOfAllSubscriptions } from "data/youtube/videosOfAllSubscriptions";
import { youtubeService } from "services/youtube";
import { TSubscription, tVideoSchema } from "types";
import { z } from "zod";

export const useVideoList = (subscriptionList: TSubscription[]) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["video_list"],
    queryFn: () => youtubeService.getVideoOfAllSubscription(subscriptionList),
  });

  const validatedData = z.array(tVideoSchema).safeParse(data);
  const videoList = videosOfAllSubscriptions.items;

  if (!validatedData.success || validatedData.data.length < 1)
    return [videoList, isLoading] as const;

  return [validatedData.data, isLoading] as const;
};
