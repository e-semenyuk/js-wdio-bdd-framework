import { Page } from '../core/base/page';

class PolicyManagementPage extends Page {
    get activePolicy() { return $('#active-policy'); }
    get cancelPolicyButton() { return $('#cancel-policy-button'); }
    get nyStateSpecificDetails() { return $('#ny-state-specific-details'); }
    get submitButton() { return $('#submit-button'); }

    navigateToPolicyManagementSection() {
        browser.url('/policy-management');
    }

    selectActivePolicy() {
        this.activePolicy.click();
    }

    clickCancelPolicy() {
        this.cancelPolicyButton.click();
    }

    fillStateSpecificDetails(details: string) {
        this.nyStateSpecificDetails.setValue(details);
    }

    submitRequest() {
        this.submitButton.click();
    }
}

export default new PolicyManagementPage();