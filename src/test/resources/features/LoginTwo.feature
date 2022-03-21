Feature: Test Login Functionality
  Scenario: Check if login is successfully with valid credentials
    Given browser is open
    And user is in login page
    When user enters with username e password
    And user click on login button
    Then user is logged