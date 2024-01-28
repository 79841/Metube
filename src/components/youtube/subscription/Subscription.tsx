import { useRef } from "react";

type TSubscriptionProps = {
  subscription: Record<string, any>;
};
export const Subscription = ({ subscription }: TSubscriptionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (!ref.current) return;
    ref.current.style.backgroundImage = `url(${subscription.thumbnails.high.url})`;
  };

  const handleMouseOut = () => {
    if (!ref.current) return;
    ref.current.style.backgroundImage = "none";
  };

  return (
    <div
      ref={ref}
      className="relative justify-start bg-cover bg-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex h-fit w-fit gap-4 bg-zinc-900 bg-opacity-50 px-2 py-2">
        <div className="h-12 w-12 min-w-12 overflow-hidden rounded-lg">
          <img
            src={subscription.thumbnails.high.url}
            alt={subscription.title}
            loading={"lazy"}
            sizes="3rem"
          />
        </div>
        <div className="flex items-center">
          <div className="w-60 truncate text-sm text-zinc-100">
            {subscription.title}
          </div>
        </div>
      </div>
    </div>
  );
};
