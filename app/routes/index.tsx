import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router";
import { json, LoaderFunction, useSubmit } from "remix";
import LoginButton from "../LoginButton";
import { commitSession, getSession } from "../sessions";

export const loader: LoaderFunction = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));

  console.log("Session data Index Page:", session.data);

  return {};
};

export default function Index() {
  const submit = useSubmit();
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      {!isAuthenticated && <LoginButton />}
    </div>
  );
}
