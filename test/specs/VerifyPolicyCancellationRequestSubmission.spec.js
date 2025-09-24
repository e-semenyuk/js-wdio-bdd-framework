const PolicyManagementPage = require('../pageobjects/PolicyManagementPage');

describe('Verify Policy Cancellation Request Submission', () => {
    it('should submit a policy cancellation request successfully', () => {
        // Navigate to the Policy Management section
        PolicyManagementPage.navigateToPolicyManagementSection();

        // Select the active policy
        PolicyManagementPage.selectActivePolicy();

        // Click "Cancel Policy"
        PolicyManagementPage.clickCancelPolicy();

        // Fill in required details
        const details = {
            // Add details here
        };
        PolicyManagementPage.fillRequiredDetails(details);

        // Select the state-specific cancellation rules (if applicable)
        const state = 'NY';
        PolicyManagementPage.selectStateSpecificCancellationRules(state);

        // Submit the request
        PolicyManagementPage.submitCancellationRequest();

        // Assertions
        expect(browser).toHaveUrlContaining('/confirmation');
        expect($('selector-for-confirmation-message')).toBeDisplayed();
        expect($('selector-for-confirmation-message')).toHaveTextContaining('Request submitted successfully');
    });
});