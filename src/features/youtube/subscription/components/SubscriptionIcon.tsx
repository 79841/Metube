import { TSubscription } from "types";

type TsubscriptionIconProps = {
  subscription: TSubscription["snippet"];
};
export const SubscriptionIcon = ({ subscription }: TsubscriptionIconProps) => {
  return (
    <div className="h-12 w-12 min-w-10 overflow-hidden rounded-lg">
      <img
        src={subscription.thumbnails.high.url}
        alt={subscription.title}
        loading={"lazy"}
        sizes="3rem"
      />
    </div>
  );
};
