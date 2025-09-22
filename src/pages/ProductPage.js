class ProductPage {
    get quantitySelector() { return $('#quantity-selector'); }
    get addToCartButton() { return $('#add-to-cart-button'); }
    get errorMessage() { return $('#error-message'); }

    selectQuantity(quantity) {
        this.quantitySelector.setValue(quantity);
    }

    addToCart() {
        this.addToCartButton.click();
    }

    getErrorMessage() {
        return this.errorMessage.getText();
    }
}

module.exports = new ProductPage();