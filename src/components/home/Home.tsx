import { useEffect } from "react";
import { useSubscribeList } from "../../hooks/useSubscribeList";
import { SubscriptionList } from "../youtube/subscription";
import { useSubscribedListStore } from "../../lib/zustand/subscribedList";
import { VideoList } from "../youtube/video";
import { VideoModal } from "../youtube/video";
import { DndContextProvider } from "../common/dnd/context";
import { DndSpace } from "../common/dnd/DndSpace";

export const Home = () => {
  const { data, isLoading } = useSubscribeList();
  const { setSubscribedList } = useSubscribedListStore();

  useEffect(() => {
    if (data instanceof Array) setSubscribedList(data);
  }, [data, setSubscribedList]);

  return (
    <div className="h-full w-full">
      <div className="flex h-fit justify-center px-8 pt-8">
        <div className="mr-auto text-2xl font-semibold text-zinc-100">
          Metube
        </div>
        <input
          className="h-8 w-80 rounded-lg bg-zinc-800 p-4 text-zinc-100 outline-none backdrop-blur-md"
          type="text"
          placeholder="Search..."
        />
        <div className="ml-auto text-2xl">Metube</div>
      </div>
      <div className="flex h-fit w-full gap-8 p-8">
        {/* <GoogleLogoutbutton /> */}
        {!isLoading && (
          <>
            <div className="sticky top-16 h-fit">
              <SubscriptionList />
            </div>
            <div className="flex-[1]">
              <VideoList />
            </div>
          </>
        )}
      </div>
      <DndContextProvider>
        <DndSpace>
          <VideoModal />
        </DndSpace>
      </DndContextProvider>
    </div>
  );
};
