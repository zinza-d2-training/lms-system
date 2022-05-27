export function formatUrl(url: string) {
  // eslint-disable-next-line no-useless-escape
  return url.replace(/([\\\&])/g, '/');
}
