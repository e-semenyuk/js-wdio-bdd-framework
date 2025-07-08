import Page from "../../core/base/page";

class ProductPage extends Page {
  async open(path: string) {
    await browser.url(path);
  }

  async selectQuantity(quantity: number) {
    const quantitySelector = await $('#quantity-selector'); // Update selector as per actual implementation
    await quantitySelector.selectByAttribute('value', quantity.toString());
  }

  async addToCart(quantity: number) {
    const addToCartButton = await $('#add-to-cart-button'); // Update selector as per actual implementation
    for (let i = 0; i < quantity; i++) {
      await addToCartButton.click();
    }
  }

  async isAdditionPrevented() {
    // Implement logic to check if the addition of more than 3 units is prevented
    const errorMessage = await this.getErrorMessage();
    return errorMessage.includes("You cannot add more than 3 units of this product to your cart");
  }

  async getErrorMessage() {
    const errorMessageElement = await $('#error-message'); // Update selector as per actual implementation
    return await errorMessageElement.getText();
  }
}

export default new ProductPage();