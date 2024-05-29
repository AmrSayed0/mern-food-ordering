import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

// auth
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  // you can use the API identifier from the Auth0 dashboard
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = async () => {
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
