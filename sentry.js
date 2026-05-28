import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://1e2236721ec5a35f63d6ac8c9b1edd32@o4511467222335488.ingest.us.sentry.io/4511467293638656",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
