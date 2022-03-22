Feature: Testing Login Functionality

  Scenario Outline: Check if login is successfully with valid credentials
    Given browser is open
    And user is in login page
    When user enters with <email> and <password>
    And user click on login button
    Then user is logged

    Examples:
      | email                       | password      |
      | diogotestselenium@gmail.com | selenium12345 |
      | diogotest@gmail.com         | 12345678      |

  Scenario Outline: Check if login is NOT successfully with invalid credentials
    Given browser is open
    And user is in login page
    When user enters with <email> and <password>
    And user click on login button
    Then user is not logged

    Examples:
      | email                        | password    |
      | emailnaocadastrado@gmail.com | 54587855    |
      | diogotest@gmail.com          | werwerwewer |

  Scenario Outline: Check if login is NOT successfully without email or password
    Given browser is open
    And user is in login page
    When user enters with <email> and <password>
    And user click on login button
    Then user is not logged

    Examples:
      | email                       | password |
      | diogotestselenium@gmail.com |          |
      |                             | 123123   |