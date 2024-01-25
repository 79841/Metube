import { useEffect, useRef, useState } from "react";
import { useVideoList } from "../../../hooks/useVideoList";
import { Video } from "./Video";
import { videosOfAllSubscriptions } from "../../../data/youtube/videosOfAllSubscriptions";

export const VideoList = () => {
  // const { data, isLoading } = useVideoList();
  // const { subscribedList } = useSubscribedListStore();
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   const getVideos = async () => {
  //     const response =
  //       await youtubeService.getVideoOfAllSubscription(subscribedList);
  //     setVideos(response);
  //   };
  // }, [subscribedList]);

  // useVideoList();

  return (
    <div className="grid h-fit w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Video videoData={videosOfAllSubscriptions[0].items[0]} />
      <Video videoData={videosOfAllSubscriptions[0].items[0]} />
      <Video videoData={videosOfAllSubscriptions[0].items[0]} />
      <Video videoData={videosOfAllSubscriptions[0].items[0]} />

      {/* {Array.from({ length: 50 }).map((_, i) => (
        <Video key={i} />
      ))} */}
    </div>
  );
};
