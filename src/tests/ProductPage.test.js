const ProductPage = require('../pages/ProductPage');

describe('Product Page - Quantity Selection', () => {
    it('should display an error message when selecting an invalid quantity', () => {
        // Navigate to product page
        browser.url('/product-page');

        // Select invalid quantity
        ProductPage.selectQuantity(0);

        // Add to cart
        ProductPage.addToCart();

        // Verify error message
        const errorMessage = ProductPage.getErrorMessage();
        expect(errorMessage).toContain('Invalid quantity');
    });
});