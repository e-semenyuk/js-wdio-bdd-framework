import Page from '../core/base/page';

class OrderSummaryPage extends Page {
  constructor() {
    super('order-summary');
  }

  async open() {
    await super.open('/order-summary');
  }

  async reviewOrderSummary() {
    // Implement the logic to review the order summary
  }

  async isOrderSummaryDisplayed() {
    // Implement the logic to verify if the order summary is displayed
    return true; // Change this to actual implementation
  }

  async isPaymentProcessingIncluded() {
    // Implement the logic to verify if payment processing is included in the order summary
    return false; // Change this to actual implementation
  }
}

export default new OrderSummaryPage();