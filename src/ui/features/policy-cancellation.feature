@feature:policy-cancellation
Feature: Policy Cancellation
  As a policyholder
  I want to cancel my policy
  So that I can stop coverage and receive any applicable refunds

  @NY_release
  Scenario: Verify Policy Cancellation Request Submission
    Given I am on the "policy management" page
    When I select the active policy
    And I click "Cancel Policy"
    And I fill in required details
    And I submit the request
    Then I should see a confirmation message stating the request was submitted successfully
    And the system should dynamically identify my state based on my address
    And the system should apply the appropriate cancellation rules for NY