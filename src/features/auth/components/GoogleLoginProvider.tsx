import { gapi } from "gapi-script";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGoogleAccessTokenStore } from "../../../lib/zustand";
import { googleService } from "../../../services/google";
type TGoogleLoginProviderProps = PropsWithChildren;
export const GoogleLoginProvider = ({
  children,
}: TGoogleLoginProviderProps) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const navigate = useNavigate();
  const { accessToken } = useGoogleAccessTokenStore();

  useEffect(() => {
    gapi.load("client:auth2", function () {
      gapi.client.init({ clientId, scope: "" });
    });

    const checkAccessToken = async () => {
      if (!accessToken) {
        navigate("/login");
      } else {
        try {
          await googleService.verifyAccessToken(accessToken);
        } catch (e) {
          navigate("/login");
        }
      }
    };
    checkAccessToken();
  }, [accessToken, apiKey, clientId, navigate]);

  return <>{children}</>;
};
