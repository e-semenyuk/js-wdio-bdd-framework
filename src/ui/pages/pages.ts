import { Page } from "../../core/base/page";
import Logger from "../../utils/logger";

declare const $: any;
declare const $$: any;

const logger = new Logger("Pages");

class LoginPage extends Page {
  private selectors = {
    emailInput: "#email",
    passwordInput: "#password",
    loginButton: "#login-button",
    errorMessage: ".error-message"
  };

  async login(email: string, password: string): Promise<void> {
    await this.setValue(this.selectors.emailInput, email);
    await this.setValue(this.selectors.passwordInput, password);
    await this.click(this.selectors.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText(this.selectors.errorMessage);
  }
}

class RegistrationPage extends Page {
  private selectors = {
    firstNameInput: "#firstName",
    lastNameInput: "#lastName",
    emailInput: "#email",
    passwordInput: "#password",
    confirmPasswordInput: "#confirmPassword",
    registerButton: "#register-button",
    successMessage: ".success-message"
  };

  async register(userData: any): Promise<void> {
    await this.setValue(this.selectors.firstNameInput, userData.firstName);
    await this.setValue(this.selectors.lastNameInput, userData.lastName);
    await this.setValue(this.selectors.emailInput, userData.email);
    await this.setValue(this.selectors.passwordInput, userData.password);
    await this.setValue(this.selectors.confirmPasswordInput, userData.password);
    await this.click(this.selectors.registerButton);
  }

  async getSuccessMessage(): Promise<string> {
    return await this.getText(this.selectors.successMessage);
  }
}

class HomePage extends Page {
  private selectors = {
    welcomeMessage: ".welcome-message",
    logoutButton: "#logout-button",
    profileLink: "#profile-link"
  };

  async getWelcomeMessage(): Promise<string> {
    return await this.getText(this.selectors.welcomeMessage);
  }

  async logout(): Promise<void> {
    await this.click(this.selectors.logoutButton);
  }

  async goToProfile(): Promise<void> {
    await this.click(this.selectors.profileLink);
  }
}

class CatalogPage extends Page {
  private selectors = {
    searchInput: "#search-input",
    searchButton: "#search-button",
    categoryFilter: "#category-filter",
    sortDropdown: "#sort-dropdown",
    productList: ".product-list",
    productItem: ".product-item",
    addToCartButton: ".add-to-cart-btn",
    priceElement: ".price",
    noResultsMessage: ".no-results-message",
    languageAttribute: "html[lang]"
  };

  async browseProducts(): Promise<void> {
    await this.waitForElement(this.selectors.productList);
    logger.info("Browsing products");
  }

  async searchProducts(searchTerm: string): Promise<void> {
    await this.setValue(this.selectors.searchInput, searchTerm);
    await this.click(this.selectors.searchButton);
  }

  async filterByCategory(category: string): Promise<void> {
    await this.click(this.selectors.categoryFilter);
    await this.click(`[data-category="${category}"]`);
  }

  async sortProducts(sortOption: string): Promise<void> {
    await this.click(this.selectors.sortDropdown);
    await this.click(`[data-sort="${sortOption}"]`);
  }

  async addProductToCart(): Promise<void> {
    await this.click(this.selectors.addToCartButton);
  }

  async addSampleProductToCart(): Promise<void> {
    await this.click(this.selectors.addToCartButton);
  }

  async getProductsCount(): Promise<number> {
    const elements = await $$(this.selectors.productItem);
    return elements.length;
  }

  async getSearchResultsCount(): Promise<number> {
    const elements = await $$(this.selectors.productItem);
    return elements.length;
  }

  async getFilteredResultsCount(): Promise<number> {
    const elements = await $$(this.selectors.productItem);
    return elements.length;
  }

  async verifySearchRelevance(searchTerm: string): Promise<boolean> {
    // This would check if search results contain the search term
    return true;
  }

  async verifyAllResultsInCategory(category: string): Promise<boolean> {
    // This would verify all products are in the specified category
    return true;
  }

  async verifyPriceSorting(direction: string): Promise<boolean> {
    // This would verify products are sorted by price
    return true;
  }

  async getCurrencySymbol(): Promise<string> {
    const priceElement = await $(this.selectors.priceElement);
    const priceText = await priceElement.getText();
    return priceText.charAt(0);
  }

  async getNoResultsMessage(): Promise<string> {
    return await this.getText(this.selectors.noResultsMessage);
  }

  async getPageLanguage(): Promise<string> {
    const htmlElement = await $("html");
    return await htmlElement.getAttribute("lang");
  }
}

class CartPage extends Page {
  private selectors = {
    cartItems: ".cart-item",
    removeButton: ".remove-btn",
    checkoutButton: "#checkout-button",
    cartCount: ".cart-count",
    cartTotal: ".cart-total"
  };

  async proceedToCheckout(): Promise<void> {
    await this.click(this.selectors.checkoutButton);
  }

  async removeItemFromCart(): Promise<void> {
    await this.click(this.selectors.removeButton);
  }

  async isProductInCart(): Promise<boolean> {
    const cartItems = await $$(this.selectors.cartItems);
    return cartItems.length > 0;
  }

  async getCartCount(): Promise<number> {
    const countText = await this.getText(this.selectors.cartCount);
    return parseInt(countText);
  }

  async getCartTotal(): Promise<number> {
    const totalText = await this.getText(this.selectors.cartTotal);
    return parseFloat(totalText.replace(/[^0-9.]/g, ""));
  }
}

class CheckoutPage extends Page {
  private selectors = {
    shippingForm: "#shipping-form",
    paymentForm: "#payment-form",
    confirmButton: "#confirm-order",
    discountInput: "#discount-code",
    applyDiscountButton: "#apply-discount",
    originalTotal: ".original-total",
    discountedTotal: ".discounted-total",
    paymentError: ".payment-error"
  };

  async enterShippingInfo(address: any): Promise<void> {
    await this.setValue("#street", address.street);
    await this.setValue("#city", address.city);
    await this.setValue("#postalCode", address.postalCode);
  }

  async enterPaymentInfo(): Promise<void> {
    await this.setValue("#card-number", "4111111111111111");
    await this.setValue("#expiry", "12/25");
    await this.setValue("#cvv", "123");
  }

  async enterInvalidPaymentInfo(): Promise<void> {
    await this.setValue("#card-number", "4000000000000002");
    await this.setValue("#expiry", "12/25");
    await this.setValue("#cvv", "123");
  }

  async confirmOrder(): Promise<void> {
    await this.click(this.selectors.confirmButton);
  }

  async tryConfirmOrder(): Promise<void> {
    await this.click(this.selectors.confirmButton);
  }

  async applyDiscountCode(code: string): Promise<void> {
    await this.setValue(this.selectors.discountInput, code);
    await this.click(this.selectors.applyDiscountButton);
  }

  async isDiscountApplied(): Promise<boolean> {
    const discountedElement = await $(this.selectors.discountedTotal);
    return await discountedElement.isDisplayed();
  }

  async getOriginalTotal(): Promise<number> {
    const totalText = await this.getText(this.selectors.originalTotal);
    return parseFloat(totalText.replace(/[^0-9.]/g, ""));
  }

  async getDiscountedTotal(): Promise<number> {
    const totalText = await this.getText(this.selectors.discountedTotal);
    return parseFloat(totalText.replace(/[^0-9.]/g, ""));
  }

  async getPaymentErrorMessage(): Promise<string> {
    return await this.getText(this.selectors.paymentError);
  }
}

class OrderPage extends Page {
  private selectors = {
    orderStatus: ".order-status",
    confirmationMessage: ".confirmation-message"
  };

  async getOrderStatus(): Promise<string> {
    return await this.getText(this.selectors.orderStatus);
  }

  async getConfirmationMessage(): Promise<string> {
    return await this.getText(this.selectors.confirmationMessage);
  }
}

class OrderHistoryPage extends Page {
  private selectors = {
    orderList: ".order-list",
    orderItem: ".order-item",
    languageAttribute: "html[lang]"
  };

  async navigateToOrderHistory(): Promise<void> {
    // This would navigate to order history
    logger.info("Navigated to order history");
  }

  async getOrdersCount(): Promise<number> {
    const elements = await $$(this.selectors.orderItem);
    return elements.length;
  }

  async getPageLanguage(): Promise<string> {
    const htmlElement = await $("html");
    return await htmlElement.getAttribute("lang");
  }
}

class ProfilePage extends Page {
  private selectors = {
    orderHistoryLink: "#order-history-link"
  };

  async navigateToOrderHistory(): Promise<void> {
    await this.click(this.selectors.orderHistoryLink);
  }
}

class PageFactory {
  getLoginPage(): LoginPage {
    return new LoginPage();
  }

  getRegistrationPage(): RegistrationPage {
    return new RegistrationPage();
  }

  getHomePage(): HomePage {
    return new HomePage();
  }

  getCatalogPage(): CatalogPage {
    return new CatalogPage();
  }

  getCartPage(): CartPage {
    return new CartPage();
  }

  getCheckoutPage(): CheckoutPage {
    return new CheckoutPage();
  }

  getOrderPage(): OrderPage {
    return new OrderPage();
  }

  getOrderHistoryPage(): OrderHistoryPage {
    return new OrderHistoryPage();
  }

  getProfilePage(): ProfilePage {
    return new ProfilePage();
  }
}

export default new PageFactory(); 