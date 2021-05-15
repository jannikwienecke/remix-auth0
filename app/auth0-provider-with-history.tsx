// src/auth/auth0-provider-with-history.js

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithHistory: React.FC = ({ children, ...props }: any) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const domain = props.ENV.REACT_APP_AUTH0_DOMAIN;
  const clientId = props.ENV.REACT_APP_AUTH0_CLIENT_ID;
  const audience = props.ENV.REACT_APP_AUTH0_AUDIENCE;

  if (!domain || !clientId)
    throw new Error("Domain and Audience must be in .env");

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={"http://localhost:3000/login"}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
