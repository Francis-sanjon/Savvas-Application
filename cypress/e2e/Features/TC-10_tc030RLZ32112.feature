
# Test Case-10
Feature: TC-10_Verify rectangular/square class card based on screen resolution for teacher user

    Scenario Outline:Verify rectangular/square class card based on screen resolution for teacher user
          Given User launche the Realize login Page
        When User logins Savvas Appllication As Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies rectangular class card is displayed in full browser window
        And User Change bowser resolution to 767
        Then User verifies mobile class card is displayed or not when browser resolution is below 768
        And User Change bowser resolution to 800
        Then User verifies Rectangular class card is displayed or not when browser resolution is 768 or above

        Examples:
            | username               | password    |
            | smokesuite17_teacher01 | testing123$ |