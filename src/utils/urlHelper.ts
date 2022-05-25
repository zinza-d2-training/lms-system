export function urlEncodeQueryParams(data: any) {
  const params = Object.keys(data).map((key) =>
    data[key]
      ? `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      : ''
  );
  return params.filter((value) => !!value).join('&');
}
