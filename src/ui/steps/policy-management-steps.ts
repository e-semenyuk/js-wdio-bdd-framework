import { Given, When, Then } from "@cucumber/cucumber";
import policyManagementPage from "../pages/policy-management-page";
import { expect } from "chai";

Given("I am on the Policy Management page", async function () {
  await policyManagementPage.navigateToPolicyManagement();
});

When("I select the active policy", async function () {
  await policyManagementPage.selectActivePolicy();
});

When("I click the Cancel Policy button", async function () {
  await policyManagementPage.clickCancelPolicy();
});

When("I fill in the state-specific cancellation details", async function () {
  await policyManagementPage.fillStateSpecificDetails("NY-specific details");
});

When("I submit the cancellation request", async function () {
  await policyManagementPage.submitCancellationRequest();
});

Then("I should see a confirmation message stating the request was submitted successfully", async function () {
  const message = await policyManagementPage.getConfirmationMessage();
  expect(message).to.equal("Your cancellation request was submitted successfully.");
});

Then("the cancellation request should be processed according to the state-specific rules", async function () {
  // Add your validation for state-specific rules here
});
