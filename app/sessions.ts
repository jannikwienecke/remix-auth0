// app/sessions.js
import { createCookieSessionStorage } from "remix";

let { getSession, commitSession, destroySession } = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",

    // all of these are optional
    domain: "remix.run",
    expires: new Date(Date.now() + 600),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: true,
  },
});

export { getSession, commitSession, destroySession };
