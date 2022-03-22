#Feature: Testing Login Functionality
#
#  Scenario Outline: Check if login is successfully with valid credential
#    Given browser is open
#    And user is in login page
#    When user enters with <email> and <password>
#    And user click on login button
#    Then user is logged
#
#    Examples:
#      | email                       | password      |
#      | diogotestselenium@gmail.com | selenium12345 |
#      | diogotest@gmail.com         | 12345678      |
