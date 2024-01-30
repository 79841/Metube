import { useSubscribedListStore } from "../../../lib/zustand/subscribedList";
import { Subscription } from "./Subscription";

export const SubscriptionList = () => {
  const { subscribedList } = useSubscribedListStore();

  return (
    <div className="flex h-[calc(100vh-12rem)] w-[4rem] flex-col items-start overflow-hidden rounded-2xl border border-zinc-600 transition-all duration-200 hover:w-[19rem]">
      <div className="h-full w-full overflow-scroll scrollbar-hide">
        {subscribedList.map(({ snippet }: any) => (
          <Subscription key={snippet.title} subscription={snippet} />
        ))}
      </div>
    </div>
  );
};
