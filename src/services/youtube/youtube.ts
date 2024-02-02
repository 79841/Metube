import axios, { AxiosInstance } from "axios";
import { TSubscription } from "../../types/Subscription";

class Youtube {
  private youtube: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.youtube = httpClient;
  }

  async getMySubscribeList(accessToken: string) {
    try {
      const response = await this.youtube.get("subscriptions", {
        params: {
          part: "snippet,contentDetails",
          mine: "true",
          maxResults: 1000,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
      return response.data.items;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getRecentVideoIdByChannelId(channelId: string) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          channelId: channelId,
          maxResults: 1,
          type: "video",
          order: "date",
        },
      });
      return response.data.items[0].id.videoId;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getVideoDetailByVideoIdList(videoIdList: string[]) {
    try {
      const response = await this.youtube.get("/videos", {
        params: {
          part: "snippet,contentDetails",
          id: videoIdList.join(","),
          maxResults: videoIdList.length,
        },
      });
      return response.data.items;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getVideoOfAllSubscription(subscriptionList: TSubscription[]) {
    const videoIdListPromises = subscriptionList.map(async (subscription) => {
      try {
        const response = await this.getRecentVideoIdByChannelId(
          subscription.snippet.resourceId.channelId,
        );
        return response;
      } catch (e) {
        console.log(e);
        return "";
      }
    });
    const videoIdList = await Promise.all(videoIdListPromises);
    const validVideoIdList = videoIdList.filter((videoId) => videoId !== "");

    try {
      const response = await this.getVideoDetailByVideoIdList(validVideoIdList);
      return response;
    } catch (e) {
      return [];
    }
  }
}

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export const youtubeService = new Youtube(httpClient);
