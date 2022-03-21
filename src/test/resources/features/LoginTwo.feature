Feature: Test Login Functionality

  Scenario Outline: Check if login is successfully with valid credentials
    Given browser is open
    And user is in login page
    When user enters with <username> and <password>
    And user click on login button
    Then user is logged

    Examples:
      | username                    | password      |
      | diogotestselenium@gmail.com | selenium12345 |
