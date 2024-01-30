import { Video } from "./default-video/Video";
import { videosOfAllSubscriptions } from "../../../data/youtube/videosOfAllSubscriptions";

export const VideoList = () => {
  return (
    <>
      <div className="h-full w-full rounded-xl @container">
        <div className="grid h-full w-full gap-4 @xl:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5">
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
          <Video videoData={videosOfAllSubscriptions[0].items[0]} />
        </div>
      </div>
    </>
  );
};
