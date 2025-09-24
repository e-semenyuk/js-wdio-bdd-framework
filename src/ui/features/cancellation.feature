Feature: Verify Default Cancellation Notice Period

  Scenario: Verify effective cancellation date is 30 days from request submission
    Given the user is logged into the application
    And the user has initiated a cancellation request
    When the user submits a policy cancellation request
    Then the user reviews the cancellation confirmation details
    And the effective cancellation date is 30 days from the date of the cancellation request submission