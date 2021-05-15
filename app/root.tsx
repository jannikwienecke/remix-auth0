import type { LinksFunction, LoaderFunction } from "remix";
import { Meta, Links, Scripts, useRouteData, LiveReload } from "remix";
import { Outlet } from "react-router-dom";

import stylesUrl from "./styles/global.css";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export function loader() {
  return {
    ENV: {
      REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
      REACT_APP_AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
      REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
      SERVER_PORT: process.env.SERVER_PORT,
      CLIENT_ORIGIN_URL: process.env.CLIENT_ORIGIN_URL,
      AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
      AUTH0_ISSUER: process.env.AUTH0_ISSUER,
    },
  };
}

function Document({ children }: { children: React.ReactNode }) {
  let data = useRouteData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Auth0ProviderWithHistory {...data}>
          {children}
        </Auth0ProviderWithHistory>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  let data = useRouteData();
  return (
    <Document>
      <Outlet />
      <footer></footer>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
