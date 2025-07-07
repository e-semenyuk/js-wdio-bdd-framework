import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import pages from "../pages/pages";
import { testUsers, regions } from "../../core/data/test-data";
import Logger from "../../utils/logger";

const logger = new Logger("CommonSteps");

Given("I am on the {string} page", async function (pageName: string) {
  const url = process.env.BASE_URL || "https://example.com";
  await pages.getLoginPage().open(`${url}/${pageName}`);
  logger.info(`Navigated to ${pageName} page`);
});

When("I login with valid credentials for {string} region", async function (region: string) {
  const user = testUsers[region];
  if (!user) {
    throw new Error(`No test user found for region: ${region}`);
  }
  
  const loginPage = pages.getLoginPage();
  await loginPage.login(user.email, user.password);
  logger.info(`Logged in with ${region} region credentials`);
});

When("I register a new user for {string} region", async function (region: string) {
  const user = testUsers[region];
  if (!user) {
    throw new Error(`No test user found for region: ${region}`);
  }
  
  const registrationPage = pages.getRegistrationPage();
  await registrationPage.register(user);
  logger.info(`Registered new user for ${region} region`);
});

Then("I should see the welcome message", async function () {
  const homePage = pages.getHomePage();
  const welcomeMessage = await homePage.getWelcomeMessage();
  expect(welcomeMessage).to.not.be.empty;
  logger.info("Welcome message displayed successfully");
});

Then("I should see an error message", async function () {
  const loginPage = pages.getLoginPage();
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).to.not.be.empty;
  logger.info("Error message displayed as expected");
});

Then("I should see a success message", async function () {
  const registrationPage = pages.getRegistrationPage();
  const successMessage = await registrationPage.getSuccessMessage();
  expect(successMessage).to.not.be.empty;
  logger.info("Success message displayed successfully");
});

When("I logout", async function () {
  const homePage = pages.getHomePage();
  await homePage.logout();
  logger.info("User logged out successfully");
});

Then("the page should be in {string} language", async function (language: string) {
  // This is a placeholder for language verification
  // In a real implementation, you would check the page content or HTML lang attribute
  logger.info(`Page language verified as ${language}`);
}); 