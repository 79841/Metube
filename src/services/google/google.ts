import axios, { AxiosInstance } from "axios";

class Google {
  private google: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.google = httpClient;
  }

  // oauth2/v1/tokeninfo?access_token=accessToken

  async verifyAccessToken(accessToken: string) {
    try {
      const response = await this.google.get("oauth2/v1/tokeninfo", {
        params: {
          access_token: accessToken,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/",
});

export const googleService = new Google(httpClient);
