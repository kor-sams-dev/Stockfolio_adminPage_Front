const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");
requestHeaders.set(
  "Authorization",
  sessionStorage
<<<<<<< HEAD
    ?.getItem("access_token")
    ?.slice(0, sessionStorage.getItem("access_token")!.length) || "no token"
=======
    ?.getItem("TOKEN")
    ?.slice(0, sessionStorage.getItem("TOKEN")!.length) || "no token"
>>>>>>> develop
);

export default requestHeaders;
