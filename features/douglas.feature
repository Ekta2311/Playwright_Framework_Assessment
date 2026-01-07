@smoke
Feature: Douglas Parfum listing using filters

  Background:
    Given user navigates to Douglas website
    And user accepts the cookie consent

  Scenario Outline: Validate parfum products using filters
     When user clicks on Parfum category
      # And user applies "<criteria>" filter
   #  Then user should see list of products for "<criteria>"

    Examples:
      | criteria  |
      | SALE      |
   #  | NEU       |
   #  | LIMITIERT |
