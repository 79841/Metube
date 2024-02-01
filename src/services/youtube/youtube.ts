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

  async getVideoByChannelId(channelId: string) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          channelId: channelId,
          maxResults: 1,
          type: "video",
        },
      });
      return response.data.items[0];
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getVideoOfAllSubscription(subscriptionList: TSubscription[]) {
    const videoListPromises = subscriptionList.map(async (subscription) => {
      try {
        const response = await this.getVideoByChannelId(
          subscription.snippet.resourceId.channelId,
        );
        return response;
      } catch (e) {
        console.log(e);
        return {};
      }
    });
    return Promise.all(videoListPromises);
  }
}

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export const youtubeService = new Youtube(httpClient);
