// // import { useQuery } from "@tanstack/react-query";
// // import { youtubeService } from "../services/youtube";
// // import { useSubscribedListStore } from "../lib/zustand/subscribedList";

import { useEffect, useState } from "react";
import { z } from "zod";
import { youtubeService } from "../services/youtube";
import { TVideo, tVideoSchema } from "../types";
import { TSubscription } from "../types/Subscription";

// import { useEffect, useState } from "react";

// import { useSubscribedListStore } from "../lib/zustand/subscribedList";
// import { youtubeService } from "../services/youtube";

// // export const useVideoList = () => {
// //   const { subscribedList } = useSubscribedListStore();
// //   const { data, isLoading } = useQuery({
// //     queryKey: ["video_list"],
// //     queryFn: () => youtubeService.getVideoOfAllSubscription(subscribedList),
// //   });
// //   return { data, isLoading };
// // };

// export const useVideoList = () => {
//   const { subscribedList } = useSubscribedListStore();
//   const [videoList, setVideoList] = useState({});

//   useEffect(() => {
//     const videoPromises = subscribedList.map(
//       (subscribed) =>
//         new Promise((resolve, reject) => {
//           youtubeService
//             .getVideoByChannelId(subscribed.snippet.resourceId.channelId)
//             .then(resolve)
//             .catch(reject)
//             .then((video) => {
//               console.log("video", video);
//             });
//           // setVideoList((prev) => ({ ...prev, [video.id.videoId]: video }));
//         }),
//     );
//     Promise.all(videoPromises).then((res) => console.log(res));
//   }, [subscribedList]);
// };

export const useVideoList = (subscriptionList: TSubscription[]) => {
  const [videoList, setvideoList] = useState<TVideo[]>([]);
  useEffect(() => {
    const getVideoOfAllSubscription = async () => {
      const data =
        await youtubeService.getVideoOfAllSubscription(subscriptionList);

      const validatedData = z.array(tVideoSchema).parse(data);
      console.log(validatedData, data);
      // if (!validatedData.success) return;

      // setvideoList(validatedData.data);
    };
    getVideoOfAllSubscription();
  }, []);
  return videoList;
};
