@feature:registration
Feature: User Registration
  As a new user
  I want to register for an account
  So that I can access the application

  @smoke @regression
  @region:US @market:US
  Scenario: Successful registration for US region
    Given I am on the "register" page
    When I register a new user for "US" region
    Then I should see a success message
    And the page should be in "en-US" language

  @smoke @regression
  @region:DE @market:DE
  Scenario: Successful registration for German region
    Given I am on the "register" page
    When I register a new user for "DE" region
    Then I should see a success message
    And the page should be in "de-DE" language

  @smoke @regression
  @region:UK @market:UK
  Scenario: Successful registration for UK region
    Given I am on the "register" page
    When I register a new user for "UK" region
    Then I should see a success message
    And the page should be in "en-GB" language

  @negative @regression
  @region:US @market:US
  Scenario: Failed registration with existing email for US region
    Given I am on the "register" page
    When I try to register with existing email for "US" region
    Then I should see an error message

  @negative @regression
  @region:DE @market:DE
  Scenario: Failed registration with weak password for German region
    Given I am on the "register" page
    When I try to register with weak password for "DE" region
    Then I should see an error message 