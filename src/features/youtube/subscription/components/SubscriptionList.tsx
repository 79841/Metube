import { useSubscribedListStore } from "lib/zustand/subscribedList";
import { TSubscription } from "types";
import { Subscription } from "./Subscription";

export const SubscriptionList = () => {
  const { subscribedList } = useSubscribedListStore();

  return (
    <div className="flex max-h-[calc(100vh-12rem)] w-[4rem] flex-col items-start justify-start overflow-hidden transition-all duration-200 hover:w-[19rem]">
      <div className="h-fit w-full overflow-scroll rounded-2xl bg-zinc-900 scrollbar-hide">
        {subscribedList.map(({ snippet }: TSubscription) => (
          <Subscription key={snippet.title} subscription={snippet} />
        ))}
      </div>
    </div>
  );
};
