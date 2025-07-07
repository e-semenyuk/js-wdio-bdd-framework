@feature:catalog
Feature: Product Catalog
  As a customer
  I want to browse and search products
  So that I can find items I want to purchase

  @smoke @regression
  @region:US @market:US
  Scenario: Browse catalog for US region
    Given I am on the "catalog" page
    When I browse the product catalog
    Then I should see products displayed
    And the page should be in "en-US" language
    And prices should be displayed in "USD"

  @smoke @regression
  @region:DE @market:DE
  Scenario: Browse catalog for German region
    Given I am on the "catalog" page
    When I browse the product catalog
    Then I should see products displayed
    And the page should be in "de-DE" language
    And prices should be displayed in "EUR"

  @smoke @regression
  @region:UK @market:UK
  Scenario: Browse catalog for UK region
    Given I am on the "catalog" page
    When I browse the product catalog
    Then I should see products displayed
    And the page should be in "en-GB" language
    And prices should be displayed in "GBP"

  @regression
  @region:US @market:US
  Scenario: Search products in US catalog
    Given I am on the "catalog" page
    When I search for "device"
    Then I should see search results
    And results should be relevant to "device"

  @regression
  @region:DE @market:DE
  Scenario: Search products in German catalog
    Given I am on the "catalog" page
    When I search for "gerät"
    Then I should see search results
    And results should be relevant to "gerät"

  @regression
  @region:UK @market:UK
  Scenario: Search products in UK catalog
    Given I am on the "catalog" page
    When I search for "device"
    Then I should see search results
    And results should be relevant to "device"

  @regression
  @region:US @market:US
  Scenario: Filter products by category in US
    Given I am on the "catalog" page
    When I filter by category "devices"
    Then I should see filtered results
    And all results should be in "devices" category

  @regression
  @region:DE @market:DE
  Scenario: Filter products by category in Germany
    Given I am on the "catalog" page
    When I filter by category "geräte"
    Then I should see filtered results
    And all results should be in "geräte" category

  @regression
  @region:UK @market:UK
  Scenario: Filter products by category in UK
    Given I am on the "catalog" page
    When I filter by category "devices"
    Then I should see filtered results
    And all results should be in "devices" category

  @regression
  @region:US @market:US
  Scenario: Sort products by price in US
    Given I am on the "catalog" page
    When I sort products by "price-low-to-high"
    Then products should be sorted by price ascending
    And prices should be displayed in "USD"

  @regression
  @region:DE @market:DE
  Scenario: Sort products by price in Germany
    Given I am on the "catalog" page
    When I sort products by "price-low-to-high"
    Then products should be sorted by price ascending
    And prices should be displayed in "EUR"

  @regression
  @region:UK @market:UK
  Scenario: Sort products by price in UK
    Given I am on the "catalog" page
    When I sort products by "price-low-to-high"
    Then products should be sorted by price ascending
    And prices should be displayed in "GBP"

  @negative @regression
  @region:US @market:US
  Scenario: Search with no results in US
    Given I am on the "catalog" page
    When I search for "nonexistentproduct"
    Then I should see no results message
    And the message should be in "en-US" language

  @negative @regression
  @region:DE @market:DE
  Scenario: Search with no results in Germany
    Given I am on the "catalog" page
    When I search for "nichtexistierendesprodukt"
    Then I should see no results message
    And the message should be in "de-DE" language

  @negative @regression
  @region:UK @market:UK
  Scenario: Search with no results in UK
    Given I am on the "catalog" page
    When I search for "nonexistentproduct"
    Then I should see no results message
    And the message should be in "en-GB" language 