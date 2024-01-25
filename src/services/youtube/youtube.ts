import axios, { AxiosInstance } from "axios";

class Youtube {
  private youtube: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.youtube = httpClient;
  }

  async getMySubscribeList(accessToken: string) {
    try {
      const response = await this.youtube.get("subscriptions", {
        params: {
          part: "snippet",
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

  // async getVideoOfAllSubscription(subscriptionList: any[]) {
  //   return subscriptionList.map(async (subscription) => {
  //     try {
  //       const response = await this.getVideoByChannelId(
  //         subscription.snippet.resourceId.channelId,
  //       );
  //       return response;
  //     } catch (e) {
  //       console.log(e);
  //       return {};
  //     }
  //   });
  // }
}

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export const youtubeService = new Youtube(httpClient);
