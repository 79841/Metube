import { useSubscribedListStore } from "../../../../lib/zustand";
import { TVideo } from "../../../../types/Video";

type TVideoInfoProps = {
  videoData: TVideo;
};
export const VideoInfo = ({ videoData }: TVideoInfoProps) => {
  const { subscribedList } = useSubscribedListStore();

  const channelInfo = subscribedList.find(
    (subscribed) => subscribed.snippet.title === videoData.snippet.channelTitle,
  );
  return (
    <>
      {typeof channelInfo !== "undefined" && (
        <div className="w-10 min-w-10 max-w-10 overflow-hidden rounded-lg">
          <img
            src={channelInfo.snippet.thumbnails.default.url}
            alt={channelInfo.snippet.title}
            className="object-cover"
          />
        </div>
      )}
      <div className="text-sm">{videoData.snippet.title}</div>
    </>
  );
};
