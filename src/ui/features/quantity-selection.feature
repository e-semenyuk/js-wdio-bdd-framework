@feature:quantity-selection
Feature: Quantity Selection with Restriction
  As a customer
  I want to be restricted to select a maximum of 3 units per product
  So that I cannot exceed the allowed limit for my market

  @regression
  @region:NewMarket @market:NewMarket
  Scenario: System prevents customer from adding more than 3 units to the cart
    Given I am on the "product" page
    When I select a quantity of 3 units
    And I attempt to add more than 3 units of the same product to the cart
    Then the system should prevent me from adding more than 3 units
    And an error message should be displayed saying "You cannot add more than 3 units of this product to your cart"