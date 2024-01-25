import { useSubscribedListStore } from "../../../lib/zustand/subscribedList";
import { Subscription } from "./Subscription";

export const SubscriptionList = () => {
  const { subscribedList } = useSubscribedListStore();

  return (
    <div className="scrollbar-hide flex h-screen w-fit min-w-fit flex-col gap-4 overflow-scroll">
      {subscribedList.map(({ snippet }: any) => (
        <Subscription key={snippet.title} subscription={snippet} />
      ))}
    </div>
  );
};
