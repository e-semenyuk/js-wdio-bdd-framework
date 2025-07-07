#!/bin/bash

# Simplified Test Framework Runner Script
# Usage: ./run-tests.sh [test-suite] [region] [environment]

# Default values
TEST_SUITE=${1:-"smoke"}
REGION=${2:-"US"}
ENVIRONMENT=${3:-"dev"}

echo "Running tests with configuration:"
echo "  Test Suite: $TEST_SUITE"
echo "  Region: $REGION"
echo "  Environment: $ENVIRONMENT"
echo ""

# Set environment variables
export BASE_URL="https://$ENVIRONMENT.example.com"

# Run tests based on test suite
case $TEST_SUITE in
  "smoke")
    echo "Running smoke tests..."
    npm test -- --cucumberOpts.tagExpression="@smoke"
    ;;
  "regression")
    echo "Running regression tests..."
    npm test -- --cucumberOpts.tagExpression="@regression"
    ;;
  "catalog")
    echo "Running catalog tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:catalog"
    ;;
  "purchases")
    echo "Running purchase tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:purchases"
    ;;
  "login")
    echo "Running login tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:login"
    ;;
  "registration")
    echo "Running registration tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:registration"
    ;;
  "us-region")
    echo "Running US region tests..."
    npm test -- --cucumberOpts.tagExpression="@region:US"
    ;;
  "german-region")
    echo "Running German region tests..."
    npm test -- --cucumberOpts.tagExpression="@region:DE"
    ;;
  "uk-region")
    echo "Running UK region tests..."
    npm test -- --cucumberOpts.tagExpression="@region:UK"
    ;;
  "catalog-us")
    echo "Running US catalog tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:catalog and @region:US"
    ;;
  "catalog-de")
    echo "Running German catalog tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:catalog and @region:DE"
    ;;
  "catalog-uk")
    echo "Running UK catalog tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:catalog and @region:UK"
    ;;
  "purchases-us")
    echo "Running US purchase tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:purchases and @region:US"
    ;;
  "purchases-de")
    echo "Running German purchase tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:purchases and @region:DE"
    ;;
  "purchases-uk")
    echo "Running UK purchase tests..."
    npm test -- --cucumberOpts.tagExpression="@feature:purchases and @region:UK"
    ;;
  "all")
    echo "Running all tests..."
    npm test
    ;;
  *)
    echo "Unknown test suite: $TEST_SUITE"
    echo "Available test suites:"
    echo "  smoke, regression, catalog, purchases, login, registration"
    echo "  us-region, german-region, uk-region"
    echo "  catalog-us, catalog-de, catalog-uk"
    echo "  purchases-us, purchases-de, purchases-uk"
    echo "  all"
    exit 1
    ;;
esac

echo ""
echo "Test execution completed!" 