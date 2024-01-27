// import { useQuery } from "@tanstack/react-query";
// import { youtubeService } from "../services/youtube";
// import { useSubscribedListStore } from "../lib/zustand/subscribedList";

import { useEffect, useState } from "react";
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
  const [videoList, setVideoList] = useState({});

  useEffect(() => {
    const videoPromises = subscribedList.map(
      (subscribed) =>
        new Promise((resolve, reject) => {
          youtubeService
            .getVideoByChannelId(subscribed.snippet.resourceId.channelId)
            .then(resolve)
            .catch(reject)
            .then((video) => {
              console.log("video", video);
            });
          // setVideoList((prev) => ({ ...prev, [video.id.videoId]: video }));
        }),
    );
    Promise.all(videoPromises).then((res) => console.log(res));
  }, [subscribedList]);
};
