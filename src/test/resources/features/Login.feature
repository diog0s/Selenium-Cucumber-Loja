#Feature: Login verifications
#
#  Scenario: login successful
#    Given User is on home page
#    When User click on login link
#    And User insert your email and your password
#    And User click in signIn button
#    Then User is will logged
#
#  Scenario Outline: login successful
#    Given User is on home page
#    When User click on login link
#    And User insert your <email> and your <password>
#    And User click in signIn button
#    Then User is will logged
#
#    Examples:
#      | email  | password |
#      | email1 | pwd1     |
#      | email2 | pwd2     |