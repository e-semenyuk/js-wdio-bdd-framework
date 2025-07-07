export const wdioConfig = {
  runner: "local",
  specs: ["./src/ui/features/**/*.feature"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--no-sandbox", "--disable-dev-shm-usage"]
      }
    }
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://example.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "cucumber",
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./src/**/steps/**/*.ts"],
    backtrace: false,
    requireModule: ["ts-node/register"],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000
  }
};

export { wdioConfig as config }; 