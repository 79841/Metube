import { useSubscribedListStore } from "../../../lib/zustand/subscribedList";
import { TSubscription } from "../../../types/Subscription";
import { Subscription } from "./Subscription";

export const SubscriptionList = () => {
  const { subscribedList } = useSubscribedListStore();

  return (
    <div className="flex h-[calc(100vh-12rem)] w-[4rem] flex-col items-start overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-200 hover:w-[19rem]">
      <div className="h-full w-full overflow-scroll scrollbar-hide">
        {subscribedList.map(({ snippet }: TSubscription) => (
          <Subscription key={snippet.title} subscription={snippet} />
        ))}
      </div>
    </div>
  );
};
