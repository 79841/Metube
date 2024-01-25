import { useEffect } from "react";
import { useSubscribeList } from "../../hooks/useSubscribeList";
import { GoogleLogoutbutton } from "../auth/GoogleLogoutbutton";
import { SubscriptionList } from "../youtube/subscription";
import { useSubscribedListStore } from "../../lib/zustand/subscribedList";
import { VideoList } from "../youtube/video";

export const Home = () => {
  const { data, isLoading } = useSubscribeList();
  const { setSubscribedList } = useSubscribedListStore();

  useEffect(() => {
    if (data instanceof Array) setSubscribedList(data);
  }, [data, setSubscribedList]);

  return (
    <div className="flex gap-8 p-8">
      {/* <GoogleLogoutbutton /> */}
      {!isLoading && (
        <>
          <SubscriptionList />
          <VideoList />
        </>
      )}
    </div>
  );
};
