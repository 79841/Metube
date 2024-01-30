import { SubscriptionIcon } from "./SubscriptionIcon";
import { SubscriptionTitle } from "./SubscriptionTitle";
import { useBackgroundImage } from "./hooks/useBackgroundImage";

type TSubscriptionProps = {
  subscription: Record<string, any>;
};
export const Subscription = ({ subscription }: TSubscriptionProps) => {
  const [ref, handleMouseOver, handleMouseOut] = useBackgroundImage(
    subscription.thumbnails.high.url,
  );

  return (
    <div
      ref={ref}
      className="relative justify-start bg-cover bg-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex h-fit w-fit gap-4 bg-zinc-900 bg-opacity-30 px-2 py-2">
        <SubscriptionIcon subscription={subscription} />
        <div className="flex items-center">
          <SubscriptionTitle title={subscription.title} />
        </div>
      </div>
    </div>
  );
};
