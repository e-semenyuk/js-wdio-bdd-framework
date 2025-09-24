import { Given, When, Then } from '@cucumber/cucumber';
import PolicyManagementPage from '../pages/policy-management-page';

Given('I am on the "policy management" page', () => {
    PolicyManagementPage.navigateToPolicyManagement();
});

When('I select the active policy', () => {
    PolicyManagementPage.selectActivePolicy();
});

When('I click "Cancel Policy"', () => {
    PolicyManagementPage.clickCancelPolicy();
});

When('I fill in required details', () => {
    PolicyManagementPage.selectState('New York');
});

When('I submit the request', () => {
    PolicyManagementPage.submitRequest();
});

Then('I should see a confirmation message stating the request was submitted successfully', () => {
    expect(PolicyManagementPage.getConfirmationMessage()).toContain('request was submitted successfully');
});

Then('the system should dynamically identify my state based on my address', () => {
    // Implementation for verifying dynamic state identification (mocked for simplicity)
    expect(browser.getUrl()).toContain('state=NY');
});

Then('the system should apply the appropriate cancellation rules for NY', () => {
    // Implementation for verifying NY-specific cancellation rules (mocked for simplicity)
    expect(PolicyManagementPage.getConfirmationMessage()).toContain('NY cancellation rules applied');
});