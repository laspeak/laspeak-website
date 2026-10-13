const required = [
  "NEXT_PUBLIC_DOMAIN",
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_HELLO_EMAIL",
  "NEXT_PUBLIC_FOUNDER_EMAIL",
  "NEXT_PUBLIC_LINKEDIN_URL",
];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(
    "Launch check: set these environment variables (or confirm the equivalent values in lib/site-config.ts):\n" +
      missing.join("\n"),
  );
  process.exitCode = 1;
} else
  console.log(
    "Launch environment complete. Verify mailbox delivery and the LinkedIn destination before launch.",
  );
