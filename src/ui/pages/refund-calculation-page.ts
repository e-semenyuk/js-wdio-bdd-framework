import { Page } from "../../core/base/page";

class RefundCalculationPage extends Page {
  private selectors = {
    stateDropdown: "#state-dropdown",
    cancellationButton: "#cancel-button",
    refundAmount: "#refund-amount",
    successMessage: ".success-message"
  };

  async selectState(state: string): Promise<void> {
    await this.click(this.selectors.stateDropdown);
    await this.click(`[data-state='${state}']`);
  }

  async submitCancellationRequest(): Promise<void> {
    await this.click(this.selectors.cancellationButton);
  }

  async getRefundAmount(): Promise<string> {
    return await this.getText(this.selectors.refundAmount);
  }

  async getSuccessMessage(): Promise<string> {
    return await this.getText(this.selectors.successMessage);
  }
}

export default new RefundCalculationPage();
