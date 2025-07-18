import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ProductDetailPage } from '../pages/product-detail.page';

Given('the customer is on the product detail page', async function () {
  await ProductDetailPage.open();
});

When('the customer attempts to select a quantity greater than 3', async function () {
  await ProductDetailPage.selectQuantity(4);
});

Then('the system restricts the selection to a maximum of 3 units', async function () {
  const selectedQuantity = await ProductDetailPage.getSelectedQuantity();
  expect(selectedQuantity).to.be.at.most(3);
});

Then('the system displays an appropriate message', async function () {
  const message = await ProductDetailPage.getQuantityRestrictionMessage();
  expect(message).to.equal('You can select a maximum of 3 units');
});