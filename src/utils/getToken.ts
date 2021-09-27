const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");
requestHeaders.set(
  "Authorization",
  sessionStorage
    ?.getItem("access_token")
    ?.slice(0, sessionStorage.getItem("access_token")!.length) || "no token"
);

export default requestHeaders;
