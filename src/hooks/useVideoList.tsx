// import { useQuery } from "@tanstack/react-query";
// import { youtubeService } from "../services/youtube";
// import { useSubscribedListStore } from "../lib/zustand/subscribedList";

import { useEffect } from "react";
import { useSubscribedListStore } from "../lib/zustand/subscribedList";
import { youtubeService } from "../services/youtube";

// export const useVideoList = () => {
//   const { subscribedList } = useSubscribedListStore();
//   const { data, isLoading } = useQuery({
//     queryKey: ["video_list"],
//     queryFn: () => youtubeService.getVideoOfAllSubscription(subscribedList),
//   });
//   return { data, isLoading };
// };

export const useVideoList = () => {
  const { subscribedList } = useSubscribedListStore();
  useEffect(() => {
    const videoPromises = subscribedList.map(
      (subscribed) =>
        new Promise((resolve, reject) => {
          try {
            const video = youtubeService.getVideoByChannelId(
              subscribed.snippet.resourceId.channelId,
            );
            resolve(video);
          } catch (e) {
            reject(e);
          }
        }),
    );
    Promise.all(videoPromises).then((res) => console.log(res));
  }, [subscribedList]);
};
