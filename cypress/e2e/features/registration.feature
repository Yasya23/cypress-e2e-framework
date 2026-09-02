@auth
Feature: User registration

  Background:
    Given the user is on the "Registration" page

  @regression
  Scenario: User registers successfully with valid credentials
    Given the user has no account
    When the user enters their valid credentials
    And the user submits the register form
    Then the user is redirected to the Login page
