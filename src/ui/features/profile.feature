@feature:profile
Feature: User Profile Management
  As a logged in user
  I want to manage my profile information
  So that I can keep my details up to date

  @regression
  @region:US @market:US
  Scenario: View profile for US region
    Given I am logged in for "US" region
    When I navigate to my profile
    Then I should see my profile information
    And the page should be in "en-US" language

  @regression
  @region:DE @market:DE
  Scenario: View profile for German region
    Given I am logged in for "DE" region
    When I navigate to my profile
    Then I should see my profile information
    And the page should be in "de-DE" language

  @regression
  @region:UK @market:UK
  Scenario: View profile for UK region
    Given I am logged in for "UK" region
    When I navigate to my profile
    Then I should see my profile information
    And the page should be in "en-GB" language

  @regression
  @region:US @market:US
  Scenario: Update profile information for US region
    Given I am logged in for "US" region
    And I am on my profile page
    When I update my profile information
    Then I should see a success message
    And my changes should be saved

  @regression
  @region:DE @market:DE
  Scenario: Update profile information for German region
    Given I am logged in for "DE" region
    And I am on my profile page
    When I update my profile information
    Then I should see a success message
    And my changes should be saved 