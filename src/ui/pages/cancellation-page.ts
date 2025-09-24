import { Page } from '../core/base/page';

class CancellationPage extends Page {
    // Locators
    get cancellationRequestButton() { return $('#cancellation-request-button'); }
    get cancellationConfirmationDetails() { return $('#cancellation-confirmation-details'); }
    get effectiveCancellationDate() { return $('#effective-cancellation-date'); }

    // Actions
    submitCancellationRequest() {
        this.cancellationRequestButton.click();
    }

    reviewCancellationConfirmationDetails() {
        return this.cancellationConfirmationDetails.getText();
    }

    getEffectiveCancellationDate() {
        return this.effectiveCancellationDate.getText();
    }
}

export default new CancellationPage();