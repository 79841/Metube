import { Suspense, useEffect } from "react";

import {
  SubscriptionList,
  useSubscribeList,
} from "features/youtube/subscription";
import { VideoList, VideoModal } from "features/youtube/video";
import { useSubscribedListStore } from "lib/zustand/subscribedList";
import { Header } from "./header";

export const Home = () => {
  const [data, isLoading] = useSubscribeList();
  const { setSubscribedList } = useSubscribedListStore();

  useEffect(() => {
    if (data instanceof Array) setSubscribedList(data);
  }, [data, setSubscribedList]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex h-full w-full gap-4 p-8">
        {/* <GoogleLogoutbutton /> */}
        <div className="sticky top-16">
          <SubscriptionList />
        </div>
        <div className="h-full flex-[1]">
          <Suspense fallback={<div>loading...</div>}>
            <VideoList />
          </Suspense>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 h-fit w-fit">
        <VideoModal />
      </div>
    </div>
  );
};
