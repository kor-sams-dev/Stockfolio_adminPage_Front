const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");
requestHeaders.set(
  "Authorization",
  sessionStorage
    ?.getItem("TOKEN")
    ?.slice(0, sessionStorage.getItem("TOKEN")!.length) || "no token"
);

export default requestHeaders;
