import { Given, When, Then } from '@cucumber/cucumber';
import PageFactory from '../pages/pages';

const catalogPage = PageFactory.getCatalogPage();
const cartPage = PageFactory.getCartPage();

Given('The customer has selected a quantity of 3 units', async () => {
  await catalogPage.selectQuantity(3);
  await catalogPage.addProductToCart();
});

When('The customer attempts to add more than 3 units of the same product to the cart', async () => {
  await catalogPage.selectQuantity(4);
  await catalogPage.addProductToCart();
});

Then('The system should prevent the customer from adding more than 3 units', async () => {
  const isProductInCart = await cartPage.isProductInCart();
  if (isProductInCart) {
    throw new Error('The system allowed more than 3 units to be added to the cart');
  }
});

Then('An error message should be displayed saying {string}', async (expectedMessage: string) => {
  const errorMessage = await catalogPage.getErrorMessage();
  if (errorMessage !== expectedMessage) {
    throw new Error(`Expected error message to be "${expectedMessage}", but got "${errorMessage}"`);
  }
});
