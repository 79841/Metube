import { useEffect } from "react";

import { useSubscribeList } from "../../hooks/useSubscribeList";
import { useSubscribedListStore } from "../../lib/zustand/subscribedList";
import { SubscriptionList } from "../youtube/subscription";
import { VideoList } from "../youtube/video";
import { VideoModal } from "../youtube/video";
import { Header } from "./header/Header";

export const Home = () => {
  const { data, isLoading } = useSubscribeList();
  const { setSubscribedList } = useSubscribedListStore();

  useEffect(() => {
    if (data instanceof Array) setSubscribedList(data);
  }, [data, setSubscribedList]);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="flex h-full w-full gap-4 p-8">
        {/* <GoogleLogoutbutton /> */}
        {!isLoading && (
          <>
            <div className="sticky top-16 h-fit">
              <SubscriptionList />
            </div>
            <div className="h-full flex-[1]">
              <VideoList />
            </div>
          </>
        )}
      </div>
      <div className="fixed bottom-0 right-0 h-fit w-fit">
        <VideoModal />
      </div>
    </div>
  );
};
