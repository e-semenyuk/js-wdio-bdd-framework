@feature:purchases
Feature: Product Purchases
  As a customer
  I want to purchase products
  So that I can buy items from the catalog

  @smoke @regression
  @region:US @market:US
  Scenario: Add product to cart for US region
    Given I am on the "catalog" page
    And I am logged in for "US" region
    When I add a product to cart
    Then the product should be added to cart
    And the cart count should increase
    And prices should be displayed in "USD"

  @smoke @regression
  @region:DE @market:DE
  Scenario: Add product to cart for German region
    Given I am on the "catalog" page
    And I am logged in for "DE" region
    When I add a product to cart
    Then the product should be added to cart
    And the cart count should increase
    And prices should be displayed in "EUR"

  @smoke @regression
  @region:UK @market:UK
  Scenario: Add product to cart for UK region
    Given I am on the "catalog" page
    And I am logged in for "UK" region
    When I add a product to cart
    Then the product should be added to cart
    And the cart count should increase
    And prices should be displayed in "GBP"

  @regression
  @region:US @market:US
  Scenario: Complete purchase flow for US region
    Given I am logged in for "US" region
    And I have items in my cart
    When I proceed to checkout
    And I enter shipping information for "US" region
    And I enter payment information
    And I confirm the order
    Then the order should be placed successfully
    And I should receive order confirmation
    And prices should be displayed in "USD"

  @regression
  @region:DE @market:DE
  Scenario: Complete purchase flow for German region
    Given I am logged in for "DE" region
    And I have items in my cart
    When I proceed to checkout
    And I enter shipping information for "DE" region
    And I enter payment information
    And I confirm the order
    Then the order should be placed successfully
    And I should receive order confirmation
    And prices should be displayed in "EUR"

  @regression
  @region:UK @market:UK
  Scenario: Complete purchase flow for UK region
    Given I am logged in for "UK" region
    And I have items in my cart
    When I proceed to checkout
    And I enter shipping information for "UK" region
    And I enter payment information
    And I confirm the order
    Then the order should be placed successfully
    And I should receive order confirmation
    And prices should be displayed in "GBP"

  @regression
  @region:US @market:US
  Scenario: Apply discount code for US purchase
    Given I am logged in for "US" region
    And I have items in my cart
    When I apply discount code "SAVE10"
    Then the discount should be applied
    And the total should be reduced
    And prices should be displayed in "USD"

  @regression
  @region:DE @market:DE
  Scenario: Apply discount code for German purchase
    Given I am logged in for "DE" region
    And I have items in my cart
    When I apply discount code "SPAREN10"
    Then the discount should be applied
    And the total should be reduced
    And prices should be displayed in "EUR"

  @regression
  @region:UK @market:UK
  Scenario: Apply discount code for UK purchase
    Given I am logged in for "UK" region
    And I have items in my cart
    When I apply discount code "SAVE10"
    Then the discount should be applied
    And the total should be reduced
    And prices should be displayed in "GBP"

  @regression
  @region:US @market:US
  Scenario: Remove item from cart for US region
    Given I am logged in for "US" region
    And I have items in my cart
    When I remove an item from cart
    Then the item should be removed from cart
    And the cart count should decrease
    And the total should be updated

  @regression
  @region:DE @market:DE
  Scenario: Remove item from cart for German region
    Given I am logged in for "DE" region
    And I have items in my cart
    When I remove an item from cart
    Then the item should be removed from cart
    And the cart count should decrease
    And the total should be updated

  @regression
  @region:UK @market:UK
  Scenario: Remove item from cart for UK region
    Given I am logged in for "UK" region
    And I have items in my cart
    When I remove an item from cart
    Then the item should be removed from cart
    And the cart count should decrease
    And the total should be updated

  @negative @regression
  @region:US @market:US
  Scenario: Purchase with invalid payment for US region
    Given I am logged in for "US" region
    And I have items in my cart
    When I proceed to checkout
    And I enter invalid payment information
    And I try to confirm the order
    Then I should see payment error message
    And the order should not be placed

  @negative @regression
  @region:DE @market:DE
  Scenario: Purchase with invalid payment for German region
    Given I am logged in for "DE" region
    And I have items in my cart
    When I proceed to checkout
    And I enter invalid payment information
    And I try to confirm the order
    Then I should see payment error message
    And the order should not be placed

  @negative @regression
  @region:UK @market:UK
  Scenario: Purchase with invalid payment for UK region
    Given I am logged in for "UK" region
    And I have items in my cart
    When I proceed to checkout
    And I enter invalid payment information
    And I try to confirm the order
    Then I should see payment error message
    And the order should not be placed

  @regression
  @region:US @market:US
  Scenario: View order history for US region
    Given I am logged in for "US" region
    When I navigate to order history
    Then I should see my previous orders
    And order details should be displayed in "en-US" language

  @regression
  @region:DE @market:DE
  Scenario: View order history for German region
    Given I am logged in for "DE" region
    When I navigate to order history
    Then I should see my previous orders
    And order details should be displayed in "de-DE" language

  @regression
  @region:UK @market:UK
  Scenario: View order history for UK region
    Given I am logged in for "UK" region
    When I navigate to order history
    Then I should see my previous orders
    And order details should be displayed in "en-GB" language 