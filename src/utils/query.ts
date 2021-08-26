export const stringToQbj = (query: string): Record<string, unknown> => {
  const queryStr = query.slice(1);
  return queryStr.split("&").reduce((acc, crr) => {
    const [queryKey, queryValue] = crr.split("=");
    return { ...acc, [queryKey]: queryValue };
  }, {});
};

export const objToString = (queryObj: Record<string, unknown>): string => {
  return `?${Object.entries(queryObj)
    .flatMap(e => e.join("="))
    .join("&")}`;
};
