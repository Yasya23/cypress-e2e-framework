@auth
Feature: User sign-in

  Background:
    Given the user is on the "Sign in" page

  @smoke @regression
  Scenario: User signs in successfully with a registered email and password
    Given the user has a registered account with a valid email and password
    When the user enters their email and password
    And the user submits the sign-in form
    Then the user is redirected to the "My account" page
