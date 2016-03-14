SystemJS.config({
  baseURL: "./server",
  paths: {
    "app": "app",
    "github:*": "jspm_server_modules/github/*",
    "npm:*": "jspm_server_modules/npm/*",
    "jspm_typescript_server/": "src/"
  }
});
