Feature: Verify System Behavior for NY-Specific Refund Calculation

  Scenario: Submit a policy cancellation request in New York
    Given I am on the refund calculation page
    When I select the state "New York"
    And I submit the cancellation request
    Then I should see the refund amount
    And I should see a success message
