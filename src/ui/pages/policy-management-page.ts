import { Page } from "../../core/base/page";
import Logger from "../../utils/logger";

const logger = new Logger("PolicyManagementPage");

class PolicyManagementPage extends Page {
  private selectors = {
    activePolicy: ".active-policy",
    cancelPolicyButton: "#cancel-policy-button",
    stateSpecificDetails: "#state-specific-details",
    submitButton: "#submit-button",
    confirmationMessage: ".confirmation-message"
  };

  async navigateToPolicyManagement(): Promise<void> {
    await this.open("/policy-management");
    logger.info("Navigated to Policy Management page");
  }

  async selectActivePolicy(): Promise<void> {
    await this.click(this.selectors.activePolicy);
  }

  async clickCancelPolicy(): Promise<void> {
    await this.click(this.selectors.cancelPolicyButton);
  }

  async fillStateSpecificDetails(details: string): Promise<void> {
    await this.setValue(this.selectors.stateSpecificDetails, details);
  }

  async submitCancellationRequest(): Promise<void> {
    await this.click(this.selectors.submitButton);
  }

  async getConfirmationMessage(): Promise<string> {
    return await this.getText(this.selectors.confirmationMessage);
  }
}

export default new PolicyManagementPage();