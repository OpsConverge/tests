export const config = {
  runner: "local",
  specs: ["./tests/**/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "https://github.com/appium/java-client/raw/master/apps/ApiDemos-debug.apk"
    }
  ],
  logLevel: "info",
  framework: "mocha",
  reporters: [
    "spec",
    ["junit", { outputDir: "./results", outputFileFormat: () => "junit-results.xml" }]
  ],
  services: ["appium"],
  mochaOpts: {
    timeout: 60000
  }
};
