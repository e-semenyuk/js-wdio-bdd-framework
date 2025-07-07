import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import pages from "../pages/pages";
import Logger from "../../utils/logger";

const logger = new Logger("CatalogSteps");

Given("I am on the {string} page", async function (pageName: string) {
  const url = process.env.BASE_URL || "https://example.com";
  await pages.getCatalogPage().open(`${url}/${pageName}`);
  logger.info(`Navigated to ${pageName} page`);
});

When("I browse the product catalog", async function () {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.browseProducts();
  logger.info("Browsed product catalog");
});

When("I search for {string}", async function (searchTerm: string) {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.searchProducts(searchTerm);
  logger.info(`Searched for: ${searchTerm}`);
});

When("I filter by category {string}", async function (category: string) {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.filterByCategory(category);
  logger.info(`Filtered by category: ${category}`);
});

When("I sort products by {string}", async function (sortOption: string) {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.sortProducts(sortOption);
  logger.info(`Sorted products by: ${sortOption}`);
});

Then("I should see products displayed", async function () {
  const catalogPage = pages.getCatalogPage();
  const productsCount = await catalogPage.getProductsCount();
  expect(productsCount).to.be.greaterThan(0);
  logger.info(`Found ${productsCount} products`);
});

Then("I should see search results", async function () {
  const catalogPage = pages.getCatalogPage();
  const resultsCount = await catalogPage.getSearchResultsCount();
  expect(resultsCount).to.be.greaterThan(0);
  logger.info(`Found ${resultsCount} search results`);
});

Then("results should be relevant to {string}", async function (searchTerm: string) {
  const catalogPage = pages.getCatalogPage();
  const isRelevant = await catalogPage.verifySearchRelevance(searchTerm);
  expect(isRelevant).to.be.true;
  logger.info(`Search results verified as relevant to: ${searchTerm}`);
});

Then("I should see filtered results", async function () {
  const catalogPage = pages.getCatalogPage();
  const filteredCount = await catalogPage.getFilteredResultsCount();
  expect(filteredCount).to.be.greaterThan(0);
  logger.info(`Found ${filteredCount} filtered results`);
});

Then("all results should be in {string} category", async function (category: string) {
  const catalogPage = pages.getCatalogPage();
  const isInCategory = await catalogPage.verifyAllResultsInCategory(category);
  expect(isInCategory).to.be.true;
  logger.info(`All results verified in category: ${category}`);
});

Then("products should be sorted by price ascending", async function () {
  const catalogPage = pages.getCatalogPage();
  const isSorted = await catalogPage.verifyPriceSorting("ascending");
  expect(isSorted).to.be.true;
  logger.info("Products verified as sorted by price ascending");
});

Then("prices should be displayed in {string}", async function (currency: string) {
  const catalogPage = pages.getCatalogPage();
  const currencySymbol = await catalogPage.getCurrencySymbol();
  const expectedSymbols = {
    "USD": "$",
    "EUR": "€",
    "GBP": "£"
  };
  expect(currencySymbol).to.equal(expectedSymbols[currency]);
  logger.info(`Prices verified in ${currency} currency`);
});

Then("I should see no results message", async function () {
  const catalogPage = pages.getCatalogPage();
  const noResultsMessage = await catalogPage.getNoResultsMessage();
  expect(noResultsMessage).to.not.be.empty;
  logger.info("No results message displayed");
});

Then("the message should be in {string} language", async function (language: string) {
  const catalogPage = pages.getCatalogPage();
  const messageLanguage = await catalogPage.getPageLanguage();
  expect(messageLanguage).to.equal(language);
  logger.info(`Message language verified as ${language}`);
}); 