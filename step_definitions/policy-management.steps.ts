import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import PolicyManagementPage from '../pages/policy-management.page';

Given('I navigate to the "Policy Management" section', async function () {
  await PolicyManagementPage.open();
});

Given('I select the active policy', async function () {
  await PolicyManagementPage.selectActivePolicy();
});

When('I click "Cancel Policy"', async function () {
  await PolicyManagementPage.clickCancelPolicy();
});

Then('the system should dynamically identify the user\'s state based on their address', async function () {
  const userState = await PolicyManagementPage.getUserState();
  expect(userState).to.not.be.null;
});

Then('the appropriate cancellation rules for NY are applied', async function () {
  const cancellationRules = await PolicyManagementPage.getCancellationRules();
  expect(cancellationRules).to.include('NY-specific rules');
});