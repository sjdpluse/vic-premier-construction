import "server-only";

/** Never manufacture a canonical domain from an unapproved deployment URL. */
function getSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTP(S) origin without credentials, path, query or hash.",
    );
  }
  return url;
}
export const siteUrl = getSiteUrl();
