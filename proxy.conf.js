const PROXY_CONFIG = [
  {
    context: [
      "/rest-server/*",
    ],
    target: "http://localhost:8080",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
