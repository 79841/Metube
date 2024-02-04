import { GoogleLogout } from "react-google-login";

import { useGoogleAccessTokenStore } from "../../../lib/zustand";

export const GoogleLogoutbutton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
  const { removeAccessToken } = useGoogleAccessTokenStore();
  const onLogoutSuccess = () => {
    removeAccessToken();
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
};
