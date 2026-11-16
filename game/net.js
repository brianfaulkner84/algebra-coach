// Shared connection settings for the live game (host and student pages).
window.Net = (function () {
  var params = new URLSearchParams(location.search);
  var local = params.get("server") === "local"; // local test server only
  return {
    PREFIX: "mrfaulkner-alg1-live-",
    peerOptions: function () {
      var ice = { iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" }
      ] };
      if (local) return { host: "127.0.0.1", port: 9000, path: "/", secure: false, config: { iceServers: [] }, debug: 0 };
      return { config: ice, debug: 0 };
    },
    studentUrl: function () {
      var u = location.href.replace(/[?#].*$/, "").replace(/host\.html$/, "");
      return u.replace(/^https?:\/\//, "");
    }
  };
})();
