import { Given, When, Then } from "@cucumber/cucumber";
import OrderSummaryPage from "../pages/order-summary.page";

Given("the user is viewing their order summary", async function () {
  await OrderSummaryPage.reviewOrderSummary();
});

When("the user reviews the order summary", async function () {
  await OrderSummaryPage.reviewOrderSummary();
});

Then("the order summary is displayed", async function () {
  // Implement logic to verify order summary is displayed
});

When('the user clicks on the \"Proceed to Payment\" button', async function () {
  await OrderSummaryPage.clickProceedToPayment();
});

Then("payment processing is not part of the order summary review", async function () {
  const isPaymentProcessingIncluded = await OrderSummaryPage.isPaymentProcessingIncluded();
  if (isPaymentProcessingIncluded) {
    throw new Error("Payment processing is included in the order summary review");
  }
});