import { Given, When, Then } from '@cucumber/cucumber';
import RefundCalculationPage from '../pages/refund-calculation-page';
import { expect } from 'chai';

Given('I am on the refund calculation page', async function () {
  await RefundCalculationPage.open();
});

When('I select the state {string}', async function (state: string) {
  await RefundCalculationPage.selectState(state);
});

When('I submit the cancellation request', async function () {
  await RefundCalculationPage.submitCancellationRequest();
});

Then('I should see the refund amount', async function () {
  const refundAmount = await RefundCalculationPage.getRefundAmount();
  expect(refundAmount).to.not.be.empty;
});

Then('I should see a success message', async function () {
  const successMessage = await RefundCalculationPage.getSuccessMessage();
  expect(successMessage).to.equal('Cancellation request accepted');
});
