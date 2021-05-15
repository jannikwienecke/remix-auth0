var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
var import_dotenv = __toModule(require("dotenv"));
import_dotenv.default.config();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/Users/sirum/code/remix/remix-auth0/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix2 = __toModule(require("remix"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));

// app/styles/global.css
var global_default = "/build/_assets/global-I5E7NNPL.css";

// app/auth0-provider-with-history.tsx
var import_react = __toModule(require("react"));
var import_auth0_react = __toModule(require("@auth0/auth0-react"));
var import_react_router_dom = __toModule(require("react-router-dom"));
var Auth0ProviderWithHistory = (_a) => {
  var _b = _a, {children} = _b, props = __objRest(_b, ["children"]);
  const navigate = (0, import_react_router_dom.useNavigate)();
  const onRedirectCallback = (appState) => {
    navigate((appState == null ? void 0 : appState.returnTo) || window.location.pathname);
  };
  const domain = props.ENV.REACT_APP_AUTH0_DOMAIN;
  const clientId = props.ENV.REACT_APP_AUTH0_CLIENT_ID;
  const audience = props.ENV.REACT_APP_AUTH0_AUDIENCE;
  if (!domain || !clientId)
    throw new Error("Domain and Audience must be in .env");
  return /* @__PURE__ */ import_react.default.createElement(import_auth0_react.Auth0Provider, {
    domain,
    clientId,
    redirectUri: "http://localhost:3000/login",
    onRedirectCallback,
    audience
  }, children);
};
var auth0_provider_with_history_default = Auth0ProviderWithHistory;

// route-module:/Users/sirum/code/remix/remix-auth0/app/root.tsx
var links = () => {
  return [{rel: "stylesheet", href: global_default}];
};
function loader() {
  return {
    ENV: {
      REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
      REACT_APP_AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
      REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
      SERVER_PORT: process.env.SERVER_PORT,
      CLIENT_ORIGIN_URL: process.env.CLIENT_ORIGIN_URL,
      AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
      AUTH0_ISSUER: process.env.AUTH0_ISSUER
    }
  };
}
function Document({children}) {
  let data = (0, import_remix2.useRouteData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(auth0_provider_with_history_default, __objSpread({}, data), children), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(data.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function App() {
  let data = (0, import_remix2.useRouteData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Outlet, null), /* @__PURE__ */ React.createElement("footer", null));
}
function ErrorBoundary({error}) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message), /* @__PURE__ */ React.createElement("p", null, "Replace this UI with what you want users to see when your app throws uncaught errors."));
}

// route-module:/Users/sirum/code/remix/remix-auth0/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  meta: () => meta
});
var meta = () => {
  return {title: "Ain't nothing here"};
};
function FourOhFour() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "404"));
}

// route-module:/Users/sirum/code/remix/remix-auth0/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_auth0_react3 = __toModule(require("@auth0/auth0-react"));
var import_react3 = __toModule(require("react"));
var import_react_router = __toModule(require("react-router"));
var import_remix4 = __toModule(require("remix"));

// app/LoginButton.tsx
var import_react2 = __toModule(require("react"));
var import_auth0_react2 = __toModule(require("@auth0/auth0-react"));
var LoginButton = () => {
  const {loginWithRedirect} = (0, import_auth0_react2.useAuth0)();
  return /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "btn btn-primary btn-block",
    onClick: () => {
      loginWithRedirect();
    }
  }, "Log In!");
};
var LoginButton_default = LoginButton;

// app/sessions.ts
var import_remix3 = __toModule(require("remix"));
var {getSession, commitSession, destroySession} = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    domain: "remix.run",
    expires: new Date(Date.now() + 600),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: true
  }
});

// route-module:/Users/sirum/code/remix/remix-auth0/app/routes/index.tsx
var loader2 = async ({request}) => {
  let session = await getSession(request.headers.get("Cookie"));
  console.log("Session data Index:", session.data);
  return {};
};
function Index() {
  const submit = (0, import_remix4.useSubmit)();
  const {isAuthenticated, user} = (0, import_auth0_react3.useAuth0)();
  if (!isAuthenticated) {
    return /* @__PURE__ */ import_react3.default.createElement(import_react_router.Navigate, {
      to: "/login"
    });
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Welcome to Remix!"), !isAuthenticated && /* @__PURE__ */ import_react3.default.createElement(LoginButton_default, null));
}

// route-module:/Users/sirum/code/remix/remix-auth0/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Index2
});
var import_auth0_react4 = __toModule(require("@auth0/auth0-react"));
var import_react4 = __toModule(require("react"));
var import_remix5 = __toModule(require("remix"));

// app/jwt.server.ts
var import_jsonwebtoken = __toModule(require("jsonwebtoken"));
var import_jwks_rsa = __toModule(require("jwks-rsa"));
var validate = async (token) => {
  var client = (0, import_jwks_rsa.default)({
    jwksUri: process.env.URI
  });
  function getKey(header, callback) {
    client.getSigningKey(header.kid, function(err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }
  const options = {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER
  };
  return new Promise((res) => {
    import_jsonwebtoken.default.verify(token, getKey, options, function(err, decoded) {
      res(decoded);
    });
  });
};

// route-module:/Users/sirum/code/remix/remix-auth0/app/routes/login.tsx
var action = async ({request}) => {
  let body = new URLSearchParams(await request.text());
  let session = await getSession(request.headers.get("Cookie"));
  const token = body.get("token");
  if (!token) {
    console.log("NO TOKEN -> login");
    return (0, import_remix5.redirect)("/login");
  }
  const userToken = await validate(token);
  if (userToken) {
    console.log("Set Token");
    session.set("token", token);
    console.log("Session data: ", session.data);
    return (0, import_remix5.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } else {
    return (0, import_remix5.redirect)("/login");
  }
};
function Index2() {
  const ref = import_react4.default.useRef(false);
  const submit = (0, import_remix5.useSubmit)();
  let data = (0, import_remix5.useRouteData)();
  const {isAuthenticated, user, getAccessTokenSilently} = (0, import_auth0_react4.useAuth0)();
  import_react4.default.useEffect(() => {
    if (isAuthenticated && ref.current === false) {
      ref.current = true;
      getAccessTokenSilently().then((token) => {
        submit({token}, {method: "post", action: "/login"});
      });
    }
  }, [isAuthenticated]);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ import_react4.default.createElement("h2", null, "LOGIN"), /* @__PURE__ */ import_react4.default.createElement(LoginButton_default, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    caseSensitive: false,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
