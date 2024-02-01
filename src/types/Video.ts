export type TVideo = {
  id: string;
  snippet: TSnippet;
  contentDetails: TContentDetails;
};

type TContentDetails = {
  duration: string;
};

type TSnippet = {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: TThumbnails;
  channelTitle: string;
  tags: string[];
};

type TThumbnails = {
  default: TThumbnail;
  medium: TThumbnail;
  high: TThumbnail;
  standard: TThumbnail;
  maxres: TThumbnail;
};

type TThumbnail = {
  url: string;
  width: number;
  height: number;
};
