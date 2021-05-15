import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { ActionFunction, redirect, useRouteData, useSubmit } from "remix";
import { validate } from "../jwt.server";
import LoginButton from "../LoginButton";
import { commitSession, getSession } from "../sessions";

export let action: ActionFunction = async ({ request }) => {
  let body = new URLSearchParams(await request.text());
  let session = await getSession(request.headers.get("Cookie"));

  const token = body.get("token");

  if (!token) {
    console.log("NO TOKEN -> login");
    return redirect("/login");
  }

  const userToken = await validate(token);

  if (userToken) {
    console.log("Set Token");
    session.set("token", token);
    console.log("Session data: ", session.data);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return redirect("/login");
  }
};

export default function Index() {
  const ref = React.useRef(false);
  const submit = useSubmit();
  let data = useRouteData();
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated && ref.current === false) {
      ref.current = true;
      getAccessTokenSilently().then((token) => {
        submit({ token }, { method: "post", action: "/login" });
      });
    }
  }, [isAuthenticated]);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>LOGIN</h2>
      <LoginButton />
    </div>
  );
}
