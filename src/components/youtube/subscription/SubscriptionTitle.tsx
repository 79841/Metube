type TSubscriptionTitleProps = {
  title: string;
};
export const SubscriptionTitle = ({ title }: TSubscriptionTitleProps) => {
  return (
    <div className="w-60 truncate pr-4 text-sm text-zinc-100">{title}</div>
  );
};
