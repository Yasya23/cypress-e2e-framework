@favorites
Feature: Favorite products

  Background:
    Given the user is logged in
    And the user's favorites list is cleared

  @regression
  Scenario: Logged-in user sees added product in favorites list
    Given the user has added a product to favorites
    When the user opens the favorites page
    Then the added product is displayed in the favorites list

  @regression
  Scenario: Logged-in user removes a product from favorites
    Given the user has added a product to favorites
    And the user opens the favorites page
    When the user removes the product from the favorites list
    Then the product is removed from the favorites list

  @regression
  Scenario: User views an empty favorites list
    When the user opens the favorites page
    Then an empty favorites message is displayed
