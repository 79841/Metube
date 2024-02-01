import { z } from "zod";

export type TVideo = {
  id: TId;
  snippet: TSnippet;
  contentDetails: TContentDetails;
};

type TContentDetails = {
  duration: string;
};

type TId = {
  kind: string;
  videoId: string;
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

const tContentDetailsSchema = z.object({
  duration: z.string(),
});

const tIdSchema = z.object({
  kind: z.string(),
  videoId: z.string(),
});

const tThumbnailSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

const tThumbnailsSchema = z.object({
  default: tThumbnailSchema,
  medium: tThumbnailSchema,
  high: tThumbnailSchema,
  standard: tThumbnailSchema,
  maxres: tThumbnailSchema,
});

const tSnippetSchema = z.object({
  publishedAt: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnails: tThumbnailsSchema,
  channelTitle: z.string(),
  tags: z.array(z.string()),
});

export const tVideoSchema = z.object({
  id: tIdSchema,
  snippet: tSnippetSchema,
  contentDetails: tContentDetailsSchema,
});
