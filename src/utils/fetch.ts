async function fetchData(endPoint: string, options = {}): Promise<any> {
  const opts = {
    method: "GET",
    headers: {},
    ...options,
  };

  const response = await fetch(endPoint, opts);

  const { status } = response;
  const result = await response.json();

  return [status, result];
}

export default fetchData;
