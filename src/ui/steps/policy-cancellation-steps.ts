import { Given, When, Then } from '@cucumber/cucumber';
import PolicyManagementPage from '../pages/policy-management-page';

Given('I navigate to the "Policy Management" section', () => {
    PolicyManagementPage.navigateToPolicyManagementSection();
});

When('I select the active policy', () => {
    PolicyManagementPage.selectActivePolicy();
});

When('I click "Cancel Policy"', () => {
    PolicyManagementPage.clickCancelPolicy();
});

When('I fill in required details including state-specific information for NY', () => {
    PolicyManagementPage.fillStateSpecificDetails('NY specific details');
});

When('I submit the request', () => {
    PolicyManagementPage.submitRequest();
});

Then('the system accepts the cancellation request', () => {
    // Add assertion to verify the request acceptance
});

Then('a confirmation message is displayed, stating the request was submitted successfully', () => {
    // Add assertion to verify the confirmation message
});

Then('the cancellation request is processed according to the state-specific rules for NY', () => {
    // Add assertion to verify the processing according to NY rules
});