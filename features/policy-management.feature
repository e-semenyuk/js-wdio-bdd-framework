@feature:policy-management
Feature: Policy Management
  As a user
  I want the system to dynamically identify my state
  So that the appropriate cancellation rules are applied

  @NY_release
  Scenario: Verify Dynamic Identification of User's State
    Given I navigate to the "Policy Management" section
    And I select the active policy
    When I click "Cancel Policy"
    Then the system should dynamically identify the user's state based on their address
    And the appropriate cancellation rules for NY are applied