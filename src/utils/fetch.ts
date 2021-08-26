async function fetchData(endPoint: string, options = {}): Promise<any> {
  const opts = {
    method: "GET",
    headers: {},
    ...options,
  };

  const response = await fetch(endPoint, opts).catch(error =>
    console.error(error)
  );

  if (response) {
    const { status } = response;
    const result = await response.json();
    return [status, result];
  }

  return ["err", "eee"];
}

export default fetchData;
