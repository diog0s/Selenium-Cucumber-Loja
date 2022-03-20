Feature: Google search functionality
  Scenario: Making a search
    Given browser is opened
    When user is on home page
    And user type a txt in search box
    And tap in enter
    Then user get your search results