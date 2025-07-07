import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import OrderSummaryPage from '../pages/order_summary_page';

Given('I am viewing my order summary', async function () {
  await OrderSummaryPage.open();
});

When('I review the order summary', async function () {
  await OrderSummaryPage.reviewOrderSummary();
});

Then('the order summary is displayed', async function () {
  const isDisplayed = await OrderSummaryPage.isOrderSummaryDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('payment processing is not part of the order summary review', async function () {
  const isPaymentProcessingIncluded = await OrderSummaryPage.isPaymentProcessingIncluded();
  expect(isPaymentProcessingIncluded).to.be.false;
});