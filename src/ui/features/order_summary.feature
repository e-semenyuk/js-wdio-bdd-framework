@order_summary
Feature: Order Summary Review
  As a user
  I want to review my order summary
  So that I can confirm my order details without processing payment

  @EPMXYZ-5455
  Scenario: Verify that payment processing is not included in the order summary review
    Given I am viewing my order summary
    When I review the order summary
    Then the order summary is displayed
    And payment processing is not part of the order summary review