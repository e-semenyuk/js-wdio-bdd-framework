@feature:quantity-selection
Feature: Quantity Selection for Product
  As a customer
  I want to select a quantity for a product
  So that I can purchase the desired number of units

  @regression @market:new
  Scenario: Attempt to select a quantity greater than 3 for a product
    Given the customer is on the product detail page
    When the customer attempts to select a quantity greater than 3
    Then the system restricts the selection to a maximum of 3 units
    And the system displays an appropriate message