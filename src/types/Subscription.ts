export type TSubscription = {
  snippet: TSnippet;
  contentDetails: TContentDetails;
};

type TContentDetails = {
  totalItemCount: number;
  newItemCount: number;
  activityType: string;
};

type TSnippet = {
  title: string;
  description: string;
  resourceId: TResourceId;
  channelId: string;
  thumbnails: TThumbnails;
};

type TResourceId = {
  kind: string;
  channelId: string;
};

type TThumbnails = {
  default: TUrl;
  medium: TUrl;
  high: TUrl;
};

type TUrl = { url: string };
