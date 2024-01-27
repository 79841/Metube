import { useEffect, useRef, useState } from "react";
import { useVideoList } from "../../../hooks/useVideoList";
import { Video } from "./Video";
import { videosOfAllSubscriptions } from "../../../data/youtube/videosOfAllSubscriptions";
import { VideoModal } from "./VideoModal";

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
    <>
      <div className="@container h-full w-full">
        <div className="@2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4 grid w-full gap-8">
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />

          {/* {Array.from({ length: 50 }).map((_, i) => (
        <Video key={i} />
      ))} */}
        </div>
      </div>
    </>
  );
};
