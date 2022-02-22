const config = {
  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};
module.exports = config;
