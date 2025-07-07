@feature:login
Feature: User Login
  As a user
  I want to login to my account
  So that I can access my profile and settings

  @smoke @regression
  @region:US @market:US
  Scenario: Successful login for US region
    Given I am on the "login" page
    When I login with valid credentials for "US" region
    Then I should see the welcome message
    And the page should be in "en-US" language

  @smoke @regression
  @region:DE @market:DE
  Scenario: Successful login for German region
    Given I am on the "login" page
    When I login with valid credentials for "DE" region
    Then I should see the welcome message
    And the page should be in "de-DE" language

  @smoke @regression
  @region:UK @market:UK
  Scenario: Successful login for UK region
    Given I am on the "login" page
    When I login with valid credentials for "UK" region
    Then I should see the welcome message
    And the page should be in "en-GB" language

  @negative @regression
  @region:US @market:US
  Scenario: Failed login with invalid credentials for US region
    Given I am on the "login" page
    When I login with invalid credentials
    Then I should see an error message

  @negative @regression
  @region:DE @market:DE
  Scenario: Failed login with invalid credentials for German region
    Given I am on the "login" page
    When I login with invalid credentials
    Then I should see an error message 