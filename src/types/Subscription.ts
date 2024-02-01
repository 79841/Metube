import { z } from "zod";

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

const tContentDetailsSchema = z.object({
  totalItemCount: z.number(),
  newItemCount: z.number(),
  activityType: z.string(),
});

const tResourceIdSchema = z.object({
  kind: z.string(),
  channelId: z.string(),
});

const tUrlSchema = z.object({
  url: z.string(),
});

const tThumbnailsSchema = z.object({
  default: tUrlSchema,
  medium: tUrlSchema,
  high: tUrlSchema,
});

const tSnippetSchema = z.object({
  title: z.string(),
  description: z.string(),
  resourceId: tResourceIdSchema,
  channelId: z.string(),
  thumbnails: tThumbnailsSchema,
});

export const tSubscriptionSchema = z.object({
  snippet: tSnippetSchema,
  contentDetails: tContentDetailsSchema,
});
