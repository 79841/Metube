import { useSubscribedListStore } from "../../../lib/zustand/subscribedList";
import { Subscription } from "./Subscription";

export const SubscriptionList = () => {
  const { subscribedList } = useSubscribedListStore();

  return (
    <div className="flex h-[calc(100vh-8rem)] w-[4rem] flex-col items-start overflow-hidden rounded-lg bg-zinc-900 transition-all duration-200 hover:w-[20rem]">
      <div className="scrollbar-hide h-full w-full overflow-scroll">
        {subscribedList.map(({ snippet }: any) => (
          <Subscription key={snippet.title} subscription={snippet} />
        ))}
      </div>
    </div>
  );
};
