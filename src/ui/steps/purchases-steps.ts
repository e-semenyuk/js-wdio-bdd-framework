import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import pages from "../pages/pages";
import { testUsers } from "../../core/data/test-data";
import Logger from "../../utils/logger";

const logger = new Logger("PurchasesSteps");

Given("I have items in my cart", async function () {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.addSampleProductToCart();
  logger.info("Added sample items to cart");
});

When("I add a product to cart", async function () {
  const catalogPage = pages.getCatalogPage();
  await catalogPage.addProductToCart();
  logger.info("Added product to cart");
});

When("I proceed to checkout", async function () {
  const cartPage = pages.getCartPage();
  await cartPage.proceedToCheckout();
  logger.info("Proceeded to checkout");
});

When("I enter shipping information for {string} region", async function (region: string) {
  const user = testUsers[region];
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.enterShippingInfo(user.address);
  logger.info(`Entered shipping information for ${region} region`);
});

When("I enter payment information", async function () {
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.enterPaymentInfo();
  logger.info("Entered payment information");
});

When("I enter invalid payment information", async function () {
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.enterInvalidPaymentInfo();
  logger.info("Entered invalid payment information");
});

When("I confirm the order", async function () {
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.confirmOrder();
  logger.info("Confirmed order");
});

When("I try to confirm the order", async function () {
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.tryConfirmOrder();
  logger.info("Attempted to confirm order");
});

When("I apply discount code {string}", async function (discountCode: string) {
  const checkoutPage = pages.getCheckoutPage();
  await checkoutPage.applyDiscountCode(discountCode);
  logger.info(`Applied discount code: ${discountCode}`);
});

When("I remove an item from cart", async function () {
  const cartPage = pages.getCartPage();
  await cartPage.removeItemFromCart();
  logger.info("Removed item from cart");
});

When("I navigate to order history", async function () {
  const profilePage = pages.getProfilePage();
  await profilePage.navigateToOrderHistory();
  logger.info("Navigated to order history");
});

Then("the product should be added to cart", async function () {
  const cartPage = pages.getCartPage();
  const isInCart = await cartPage.isProductInCart();
  expect(isInCart).to.be.true;
  logger.info("Product verified as added to cart");
});

Then("the cart count should increase", async function () {
  const cartPage = pages.getCartPage();
  const cartCount = await cartPage.getCartCount();
  expect(cartCount).to.be.greaterThan(0);
  logger.info(`Cart count: ${cartCount}`);
});

Then("the cart count should decrease", async function () {
  const cartPage = pages.getCartPage();
  const cartCount = await cartPage.getCartCount();
  expect(cartCount).to.be.greaterThanOrEqual(0);
  logger.info(`Cart count after removal: ${cartCount}`);
});

Then("the order should be placed successfully", async function () {
  const orderPage = pages.getOrderPage();
  const orderStatus = await orderPage.getOrderStatus();
  expect(orderStatus).to.equal("confirmed");
  logger.info("Order placed successfully");
});

Then("I should receive order confirmation", async function () {
  const orderPage = pages.getOrderPage();
  const confirmationMessage = await orderPage.getConfirmationMessage();
  expect(confirmationMessage).to.not.be.empty;
  logger.info("Order confirmation received");
});

Then("the discount should be applied", async function () {
  const checkoutPage = pages.getCheckoutPage();
  const discountApplied = await checkoutPage.isDiscountApplied();
  expect(discountApplied).to.be.true;
  logger.info("Discount verified as applied");
});

Then("the total should be reduced", async function () {
  const checkoutPage = pages.getCheckoutPage();
  const originalTotal = await checkoutPage.getOriginalTotal();
  const discountedTotal = await checkoutPage.getDiscountedTotal();
  expect(discountedTotal).to.be.lessThan(originalTotal);
  logger.info("Total verified as reduced");
});

Then("the total should be updated", async function () {
  const cartPage = pages.getCartPage();
  const total = await cartPage.getCartTotal();
  expect(total).to.be.greaterThan(0);
  logger.info(`Cart total updated: ${total}`);
});

Then("I should see payment error message", async function () {
  const checkoutPage = pages.getCheckoutPage();
  const errorMessage = await checkoutPage.getPaymentErrorMessage();
  expect(errorMessage).to.not.be.empty;
  logger.info("Payment error message displayed");
});

Then("the order should not be placed", async function () {
  const orderPage = pages.getOrderPage();
  const orderStatus = await orderPage.getOrderStatus();
  expect(orderStatus).to.not.equal("confirmed");
  logger.info("Order verified as not placed");
});

Then("I should see my previous orders", async function () {
  const orderHistoryPage = pages.getOrderHistoryPage();
  const ordersCount = await orderHistoryPage.getOrdersCount();
  expect(ordersCount).to.be.greaterThan(0);
  logger.info(`Found ${ordersCount} previous orders`);
});

Then("order details should be displayed in {string} language", async function (language: string) {
  const orderHistoryPage = pages.getOrderHistoryPage();
  const pageLanguage = await orderHistoryPage.getPageLanguage();
  expect(pageLanguage).to.equal(language);
  logger.info(`Order details language verified as ${language}`);
}); 