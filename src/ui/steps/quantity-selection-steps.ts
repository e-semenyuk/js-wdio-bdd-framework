import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import pages from "../pages/pages";
import Logger from "../../utils/logger";

const logger = new Logger("QuantitySelectionSteps");

Given("I am on the {string} page", async function (pageName: string) {
  const url = process.env.BASE_URL || "https://example.com";
  await pages.getProductPage().open(`${url}/${pageName}`);
  logger.info(`Navigated to ${pageName} page`);
});

When("I select a quantity of 3 units", async function () {
  const productPage = pages.getProductPage();
  await productPage.selectQuantity(3);
  logger.info("Selected a quantity of 3 units");
});

When("I attempt to add more than 3 units of the same product to the cart", async function () {
  const productPage = pages.getProductPage();
  await productPage.addToCart(4); // Attempting to add 4 units
  logger.info("Attempted to add more than 3 units to the cart");
});

Then("the system should prevent me from adding more than 3 units", async function () {
  const productPage = pages.getProductPage();
  const isPrevented = await productPage.isAdditionPrevented();
  expect(isPrevented).to.be.true;
  logger.info("System prevented adding more than 3 units");
});

Then("an error message should be displayed saying {string}", async function (expectedMessage: string) {
  const productPage = pages.getProductPage();
  const actualMessage = await productPage.getErrorMessage();
  expect(actualMessage).to.equal(expectedMessage);
  logger.info(`Error message displayed: ${actualMessage}`);
});