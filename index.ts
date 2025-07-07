import { config } from "./src/cucumber";

const { Launcher } = require("@wdio/cli");

const wdio = new Launcher("./src/cucumber.ts", {
  specs: ["./src/ui/features/**/*.feature"],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--no-sandbox", "--disable-dev-shm-usage"]
      }
    }
  ]
});

wdio.run().then(
  (exitCode: number) => {
    process.exit(exitCode);
  },
  (error: Error) => {
    console.error("Launcher failed to start the test", error.message);
    process.exit(1);
  }
); 