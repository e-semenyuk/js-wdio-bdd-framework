@feature:logout
Feature: User Logout
  As a logged in user
  I want to logout from my account
  So that I can securely end my session

  @smoke @regression
  @region:US @market:US
  Scenario: Successful logout for US region
    Given I am logged in for "US" region
    When I logout
    Then I should be redirected to the login page
    And the page should be in "en-US" language

  @smoke @regression
  @region:DE @market:DE
  Scenario: Successful logout for German region
    Given I am logged in for "DE" region
    When I logout
    Then I should be redirected to the login page
    And the page should be in "de-DE" language

  @smoke @regression
  @region:UK @market:UK
  Scenario: Successful logout for UK region
    Given I am logged in for "UK" region
    When I logout
    Then I should be redirected to the login page
    And the page should be in "en-GB" language

  @regression
  @region:US @market:US
  Scenario: Verify session is cleared after logout for US region
    Given I am logged in for "US" region
    When I logout
    And I try to access protected page
    Then I should be redirected to the login page 