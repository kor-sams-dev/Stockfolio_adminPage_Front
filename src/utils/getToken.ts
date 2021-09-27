const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");
requestHeaders.set(
  "Authorization",
  localStorage
    ?.getItem("access_token")
    ?.slice(0, localStorage.getItem("access_token")!.length) || "no token"
);

export default requestHeaders;
