@product
Feature: Actions with Chosen Product

  @regression
  Scenario: Logged-in user adds a product to favorites
    Given the user is logged in
    And the user's favorites list is cleared
    And the user is viewing a product
    When the logged-in user adds the product to favorites
    Then a confirmation message is displayed

  @regression @guest
  Scenario: Guest user cannot add products to favorites
    Given the user is not logged in
    And the guest user is viewing a product
    When the guest user tries to add the product to favorites
    Then a sign-in required message is displayed
