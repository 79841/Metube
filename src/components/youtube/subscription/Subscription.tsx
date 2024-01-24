type TSubscriptionProps = {
  subscription: Record<string, any>;
};
export const Subscription = ({ subscription }: TSubscriptionProps) => {
  return (
    <div
      className="relative flex h-40 w-40 shrink-0 flex-col items-center gap-4 overflow-hidden rounded-xl text-zinc-200"
      key={subscription.title}
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src={subscription.thumbnails.high.url}
          alt={subscription.title}
          loading={"lazy"}
          sizes="10rem"
        />
      </div>
      <div className="absolute bottom-0 flex h-8 w-full items-center bg-zinc-700 bg-opacity-50 px-2 backdrop-blur-md">
        <div className="w-full overflow-hidden truncate text-center text-sm ">
          {subscription.title}
        </div>
      </div>
    </div>
  );
};
