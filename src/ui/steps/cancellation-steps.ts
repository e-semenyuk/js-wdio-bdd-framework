import { Given, When, Then } from '@cucumber/cucumber';
import cancellationPage from '../pages/cancellation-page';
import { expect } from 'chai';

Given('the user is logged into the application', async () => {
    // Implement login functionality or reuse existing login steps
});

Given('the user has initiated a cancellation request', async () => {
    // Implement initiation of cancellation request
});

When('the user submits a policy cancellation request', async () => {
    await cancellationPage.submitCancellationRequest();
});

Then('the user reviews the cancellation confirmation details', async () => {
    const confirmationDetails = await cancellationPage.reviewCancellationConfirmationDetails();
    expect(confirmationDetails).to.include('Cancellation Request Submitted');
});

Then('the effective cancellation date is 30 days from the date of the cancellation request submission', async () => {
    const effectiveDate = await cancellationPage.getEffectiveCancellationDate();
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() + 30);
    expect(new Date(effectiveDate)).to.equal(expectedDate);
});