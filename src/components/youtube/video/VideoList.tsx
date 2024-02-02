import { useVideoList } from "../../../hooks/useVideoList";
import { useSubscribedListStore } from "../../../lib/zustand";
import { Video } from "./default-video/Video";

export const VideoList = () => {
  const { subscribedList } = useSubscribedListStore();
  const [data, isLoading] = useVideoList(subscribedList);
  return (
    <div className="h-full w-full rounded-xl @container">
      <div className="grid h-full w-full gap-4 @2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4">
        {data.map((video) => (
          <Video key={video.id} videoData={video} />
        ))}
      </div>
    </div>
  );
};
