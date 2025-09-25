import { Page } from '../core/base/page';

class PolicyManagementPage extends Page {
  get activePolicy() {
    return $('#active-policy');
  }

  get cancelPolicyButton() {
    return $('#cancel-policy-button');
  }

  async open() {
    await browser.url('/policy-management');
  }

  async selectActivePolicy() {
    await this.activePolicy.click();
  }

  async clickCancelPolicy() {
    await this.cancelPolicyButton.click();
  }

  async getUserState() {
    const userAddress = await $('#user-address').getText();
    // Logic to dynamically identify user's state from address
    const state = this.identifyStateFromAddress(userAddress);
    return state;
  }

  async getCancellationRules() {
    const rules = await $('#cancellation-rules').getText();
    return rules;
  }

  identifyStateFromAddress(address: string) {
    // Mock function to identify state from address
    if (address.includes('NY')) {
      return 'NY';
    }
    return null;
  }
}

export default new PolicyManagementPage();