import { Page } from '../core/base/page';

class PolicyManagementPage extends Page {
    get activePolicy() { return $('#active-policy'); }
    get cancelPolicyButton() { return $('#cancel-policy-button'); }
    get stateDropdown() { return $('#state-dropdown'); }
    get submitButton() { return $('#submit-button'); }
    get confirmationMessage() { return $('#confirmation-message'); }

    navigateToPolicyManagement() {
        browser.url('/policy-management');
    }

    selectActivePolicy() {
        this.activePolicy.click();
    }

    clickCancelPolicy() {
        this.cancelPolicyButton.click();
    }

    selectState(state: string) {
        this.stateDropdown.selectByVisibleText(state);
    }

    submitRequest() {
        this.submitButton.click();
    }

    getConfirmationMessage() {
        return this.confirmationMessage.getText();
    }
}

export default new PolicyManagementPage();