# Test Case-01
Feature: TC-01_Verify the Help Icon Updated with latest styles in Dashboard Page

  Scenario Outline:Verify the Help Icon Updated with latest styles in Dashboard Page
    Given User launche the Realize login Page
    When User logins Savvas Appllication with valid '<username>' and valid '<password>'
    Then User verifies the Realize Dashboard Page
    Then User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon or not
    Then User verifies Black Colour question mark button should present in Top Navbar with White background colour
    And User Mouseover the help Icon
    Then User verifies Prime Shade on Help Icon when mouseover
    And User Clicks Help Icon
    Then User Verifies Drop Down background colour
    Then User Verifies Search Text Box apperars on the Top of the Drop Down Values
    And User Enters some value in Textbox
    And User hits enter
    And User verifies the Result of Textbox
    And User close the popup
    And User Clicks Help Icon
    And User clicks Help for this Page
    Then User verifies the result for help for this page option
    And User close the popup
    And User Clicks Help Icon
    And User clicks Program Training option
    Then User verifies the url for Program Training
    And User navigating to home page
    And User Clicks Help Icon
    And User clicks Technical Support option
    Then User verifies the url for Technical Support
    And User navigating to home page
    And User Clicks Help Icon
    And User clicks Contact a Program Specialist option
    Then User verifies the url for Contact a Program Specialist

    Examples:
      | username                      | password                                     |
      | MSuite49win10chrome_teacher04 | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= |