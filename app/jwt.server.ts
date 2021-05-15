import jwt from "jsonwebtoken";
import jwks from "jwks-rsa";

export const validate = async (token: string) => {
  var client = jwks({
    jwksUri: process.env.URI!,
  });

  function getKey(header: any, callback: any) {
    client.getSigningKey(header.kid, function (err, key: any) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  const options = {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
  };

  return new Promise((res) => {
    jwt.verify(token, getKey, options, function (err, decoded: any) {
      res(decoded);
    });
  });
};
