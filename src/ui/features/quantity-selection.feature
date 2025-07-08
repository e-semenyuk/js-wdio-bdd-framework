@feature:quantity-selection
Feature: Restrict customers to select a maximum of 3 units per product
  As a customer
  I want to specify the quantity of each product I want to purchase
  So that I can buy multiple units of a product but not exceed the allowed limit for my market

  @regression @high @EPMXYZ-5927
  Scenario: System prevents customer from adding more than 3 units to the cart
    Given The customer has selected a quantity of 3 units
    When The customer attempts to add more than 3 units of the same product to the cart
    Then The system should prevent the customer from adding more than 3 units
    And An error message should be displayed saying "You cannot add more than 3 units of this product to your cart"