Feature: Policy Cancellation

  # ADO Work Item ID: 1443
  Scenario: Verify Policy Cancellation Request Submission
    Given I navigate to the "Policy Management" section
    When I select the active policy
    And I click "Cancel Policy"
    And I fill in required details including state-specific information for NY
    And I submit the request
    Then the system accepts the cancellation request
    And a confirmation message is displayed, stating the request was submitted successfully
    And the cancellation request is processed according to the state-specific rules for NY