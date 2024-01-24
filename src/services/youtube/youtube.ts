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
}

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export const youtubeService = new Youtube(httpClient);
