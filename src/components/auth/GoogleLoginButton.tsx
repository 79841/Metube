import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useNavigate } from "react-router-dom";

import { useGoogleAccessTokenStore } from "../../lib/zustand";

export const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
  const { setAccessToken } = useGoogleAccessTokenStore();

  const navigate = useNavigate();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("accessToken" in res) {
      setAccessToken(res.accessToken);
      navigate("/");
    }
  };

  const onFailure = (err: Error) => {
    console.log(err);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};
