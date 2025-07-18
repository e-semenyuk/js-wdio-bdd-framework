import { Page } from '../../core/base/page';

class ProductDetailPage extends Page {
  // Define locators and methods specific to the product detail page
  async open() {
    await browser.url('/product-detail');
  }

  async selectQuantity(quantity: number) {
    const quantitySelector = await $('#quantity-selector');
    await quantitySelector.setValue(quantity);
  }

  async getSelectedQuantity(): Promise<number> {
    const quantitySelector = await $('#quantity-selector');
    return parseInt(await quantitySelector.getValue(), 10);
  }

  async getQuantityRestrictionMessage(): Promise<string> {
    const messageElement = await $('#quantity-restriction-message');
    return await messageElement.getText();
  }
}

export const ProductDetailPage = new ProductDetailPage();