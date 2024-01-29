import { Video } from "./Video";
import { videosOfAllSubscriptions } from "../../../data/youtube/videosOfAllSubscriptions";

export const VideoList = () => {
  return (
    <>
      <div className="h-full w-full @container">
        <div className="grid w-full gap-8 @2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4">
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
