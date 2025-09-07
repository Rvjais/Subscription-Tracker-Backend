import arcjet, { detectBot, tokenBucket, shield } from "arcjet";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
   log: console,
   client: fetch,
    environment: process.env.ARCJET_ENV || "development",
    
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // ...other categories...
      ],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});
export default aj;