# Simplified Test Automation Framework

A simplified version of the PMI QA E2E test automation framework built with WebdriverIO, Cucumber, and TypeScript.

## Features

- **WebdriverIO**: Modern test automation framework
- **Cucumber**: BDD (Behavior Driven Development) support
- **TypeScript**: Type-safe test development
- **Page Object Model**: Organized page structure
- **Region-specific testing**: Support for multiple regions (US, DE, UK)
- **Tag-based execution**: Run tests by tags (smoke, regression, region-specific)

## Project Structure

```
simplified-test-framework/
├── src/
│   ├── core/
│   │   ├── base/
│   │   │   └── page.ts              # Base Page class
│   │   ├── data/
│   │   │   └── test-data.ts         # Test data for different regions
│   │   └── __tests__/
│   │       └── unit/                # Unit tests
│   ├── ui/
│   │   ├── features/                # Cucumber feature files
│   │   │   ├── login.feature
│   │   │   ├── registration.feature
│   │   │   ├── logout.feature
│   │   │   ├── profile.feature
│   │   │   ├── catalog.feature      # NEW: Product catalog tests
│   │   │   └── purchases.feature    # NEW: Purchase flow tests
│   │   ├── pages/                   # Page Object classes
│   │   │   └── pages.ts
│   │   └── steps/                   # Step definitions
│   │       ├── common-steps.ts
│   │       ├── login-steps.ts
│   │       ├── catalog-steps.ts     # NEW: Catalog step definitions
│   │       └── purchases-steps.ts   # NEW: Purchase step definitions
│   ├── utils/
│   │   └── logger.ts                # Logging utility
│   └── cucumber.ts                  # WebdriverIO configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install WebdriverIO CLI globally (optional):
```bash
npm install -g @wdio/cli
```

## Configuration

### Environment Variables

- `BASE_URL`: Base URL for the application under test
- `WINDOW_SIZE`: Browser window size (default: "1920x1080")
- `DEBUG`: Enable debug logging

### Test Data

The framework includes test data for different regions:
- **US**: United States (en-US)
- **DE**: Germany (de-DE)  
- **UK**: United Kingdom (en-GB)

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests by tags:

**Smoke tests:**
```bash
npm test -- --cucumberOpts.tagExpression="@smoke"
```

**Regression tests:**
```bash
npm test -- --cucumberOpts.tagExpression="@regression"
```

**Region-specific tests:**
```bash
# US region tests
npm test -- --cucumberOpts.tagExpression="@region:US"

# German region tests
npm test -- --cucumberOpts.tagExpression="@region:DE"

# UK region tests
npm test -- --cucumberOpts.tagExpression="@region:UK"
```

**Feature-specific tests:**
```bash
# Catalog tests
npm test -- --cucumberOpts.tagExpression="@feature:catalog"

# Purchase tests
npm test -- --cucumberOpts.tagExpression="@feature:purchases"

# Login tests
npm test -- --cucumberOpts.tagExpression="@feature:login"

# Registration tests
npm test -- --cucumberOpts.tagExpression="@feature:registration"
```

**Combined tags:**
```bash
# Smoke tests for US region
npm test -- --cucumberOpts.tagExpression="@smoke and @region:US"

# Catalog tests for German region
npm test -- --cucumberOpts.tagExpression="@feature:catalog and @region:DE"

# Purchase tests for UK region
npm test -- --cucumberOpts.tagExpression="@feature:purchases and @region:UK"
```

### Run specific feature:
```bash
npm test -- --spec "src/ui/features/catalog.feature"
npm test -- --spec "src/ui/features/purchases.feature"
```

## Test Tags

### Feature Tags
- `@feature:login` - Login functionality
- `@feature:registration` - Registration functionality
- `@feature:logout` - Logout functionality
- `@feature:profile` - Profile management
- `@feature:catalog` - Product catalog functionality
- `@feature:purchases` - Purchase flow functionality

### Test Type Tags
- `@smoke` - Smoke tests
- `@regression` - Regression tests
- `@negative` - Negative test scenarios

### Region Tags
- `@region:US` - United States region
- `@region:DE` - Germany region
- `@region:UK` - United Kingdom region
- `@market:US` - US market
- `@market:DE` - German market
- `@market:UK` - UK market

## Test Features

### Catalog Tests (`catalog.feature`)
- **Browse catalog** for each region with language and currency verification
- **Search products** with region-specific search terms
- **Filter by category** with localized category names
- **Sort products** by price with currency validation
- **Negative scenarios** for search with no results

### Purchase Tests (`purchases.feature`)
- **Add to cart** functionality for each region
- **Complete purchase flow** with region-specific shipping and payment
- **Apply discount codes** with region-specific codes
- **Remove items** from cart
- **Order history** viewing with language verification
- **Negative scenarios** for invalid payment information

## Shell Script Runner

The framework includes a convenient shell script for running different test suites:

```bash
# Run specific test suites
./run-tests.sh catalog
./run-tests.sh purchases
./run-tests.sh login
./run-tests.sh registration

# Run region-specific tests
./run-tests.sh catalog-us
./run-tests.sh catalog-de
./run-tests.sh catalog-uk
./run-tests.sh purchases-us
./run-tests.sh purchases-de
./run-tests.sh purchases-uk

# Run with environment specification
./run-tests.sh smoke US staging
./run-tests.sh regression DE prod
```

## Adding New Tests

### 1. Create Feature File
Create a new `.feature` file in `src/ui/features/`:

```gherkin
@feature:newfeature
Feature: New Feature
  As a user
  I want to do something
  So that I can achieve a goal

  @smoke @regression
  @region:US @market:US
  Scenario: Test scenario for US region
    Given I am on the "page" page
    When I perform an action
    Then I should see expected result
```

### 2. Create Step Definitions
Add step definitions in `src/ui/steps/`:

```typescript
import { Given, When, Then } from "@cucumber/cucumber";

Given("I am on the {string} page", async function (pageName: string) {
  // Implementation
});

When("I perform an action", async function () {
  // Implementation
});

Then("I should see expected result", async function () {
  // Implementation
});
```

### 3. Create Page Object (if needed)
Add new page classes in `src/ui/pages/pages.ts`:

```typescript
class NewPage extends Page {
  private selectors = {
    element: "#selector"
  };

  async performAction(): Promise<void> {
    await this.click(this.selectors.element);
  }
}
```

## Best Practices

1. **Use Page Object Model**: Keep page elements and actions in page classes
2. **Tag your tests**: Use appropriate tags for test organization
3. **Region-specific data**: Use the test data structure for different regions
4. **Logging**: Use the logger utility for debugging
5. **Type safety**: Leverage TypeScript for better code quality

## Troubleshooting

### Common Issues

1. **ChromeDriver issues**: Make sure ChromeDriver is compatible with your Chrome version
2. **Element not found**: Check selectors and wait times
3. **Test data issues**: Verify region-specific test data exists

### Debug Mode

Enable debug logging:
```bash
DEBUG=true npm test
```

## Contributing

1. Follow the existing code structure
2. Add appropriate tags to new tests
3. Include region-specific test data
4. Update documentation as needed

## License

ISC License 